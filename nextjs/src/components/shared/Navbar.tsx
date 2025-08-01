import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='w-11/12 mx-auto py-10 flex justify-between items-center'>
            <div className='text-2xl font-semibold'>Logo</div>
            <ul className='flex justify-center items-center gap-5'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
