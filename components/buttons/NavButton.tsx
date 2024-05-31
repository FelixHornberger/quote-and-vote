'use client'
import { useConditionStore } from '@/zustand/condition';
import { useHrefStore } from '@/zustand/href';
import { useTimeDataStore } from '@/zustand/time';
import Link from 'next/link';

export default function NavButton({ href }: { href: string }) {

  const { setHref } = useHrefStore();
  const { setActiveCondition } = useConditionStore();
  const { setTimeData } = useTimeDataStore()

  const handleClick = async (e: React.MouseEvent) => {
    switch (href) {
      case "/pre-study":
        const response = await fetch('/api/getTaskPages');
        const data = await response.json();
        setHref(data.href);
        setActiveCondition(data.condition);
        setTimeData({informationConsent: new Date().toLocaleTimeString()});
        break;
      case '/information-consent':
        setTimeData({start: new Date().toLocaleTimeString()});
        break
      case '/pdf':
      case '/chat':
        setTimeData({taskDescription: new Date().toLocaleTimeString()});
    }

  }

  return (
    <div className='text-center'>
      <Link href={href} passHref>
        <button className='bg-custom-accent p-2 font-semibold my-3' onClick={handleClick}>
          Next Page
        </button>
      </Link>
    </div>
  );
};

