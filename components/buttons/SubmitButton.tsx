'use client'
import Link from 'next/link';

export default function NavButton(){

    // Submit logic has to be implemented

    return (
        <div className='text-center flex justify-center'>
            <Link href="/end" passHref>
                <button className='bg-custom-accent p-2 font-semibold my-3'>
                    Submit data
                </button>
            </Link>
        </div>
    );
};