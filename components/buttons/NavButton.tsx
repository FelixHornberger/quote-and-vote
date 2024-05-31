'use client'
import { useConditionStore } from '@/zustand/condition';
import { useHrefStore } from '@/zustand/href';
import Link from 'next/link';

export default function NavButton({href}: {href: string}){

  const {setHref} = useHrefStore();
  const {setActiveCondition} = useConditionStore();

  const handleClick = async (e: React.MouseEvent) => {
    // if (likertscaleGrading['eligibilityBefore'] !== '' && party !== '' && triggered !== false ) { 
    if (href = "/pre-task") {
      const response = await fetch('/api/getTaskPages');
      const data = await response.json();
      setHref(data.href);
      setActiveCondition(data.condition);
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

