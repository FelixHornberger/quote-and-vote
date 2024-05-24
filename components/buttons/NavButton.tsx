'use client'
import Link from 'next/link';

export default function NavButton({href}: {href: string}){

  return (
    <div className='text-center'>
        <Link href={href} passHref>
            <button className='bg-custom-accent p-2 font-semibold my-3'>
                Next Page
            </button>
        </Link>
    </div>
  );
};

