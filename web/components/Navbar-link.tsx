import React from 'react';
import Link from 'next/link';

interface NavbarLinkProps {
    href: string;
    title: string;
}

export default function NavbarLink({ href, title }: NavbarLinkProps) {
    return (
        <div key={href}>
            <Link
                href={href}
                className='h-full px-6 py-10 text-sm  font-semibold  hover:text-green-600 '
            >
                {title}
            </Link>
        </div>
    );
}
