import React from 'react';
import Link from 'next/link';

interface NavbarLinkProps {
    href: string;
    title: string;
}

export default function NavbarLink({ href, title }: NavbarLinkProps) {
    return (
        <div key={href} className='relative group'>
            <Link
                href={href}
                className='block px-4 py-3 text-xs font-semibold border-x border-gray-200 border-t-2 border-t-white hover:text-red-600 group-hover:border-t-red-600'
            >
                {title}
            </Link>
            <div className='absolute hidden group-hover:block w-48 bg-white border border-gray-200 shadow-lg z-50'>
                <Link href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    Submenu 1
                </Link>
                <Link href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    Submenu 2
                </Link>
                <Link href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    Submenu 3
                </Link>
            </div>
        </div>
    );
}
