'use client';
import Link from 'next/link';
import NavbarLink from './Navbar-link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: 'Home', href: '/' },
        { title: 'Sindicato', href: '/sindicato' },
        { title: 'Secretarías', href: '/secretarias' },
        { title: 'Empresas', href: '/empresas' },
        { title: 'Turismo', href: '/turismo' },
        { title: 'Gremiales', href: '/gremiales' },
        { title: 'Obra social', href: '/obra-social' },
    ];

    return (
        <nav className='bg-white text-black'>
            <div className='max-w-7xl mx-auto px-5'>
                <div className='flex justify-between items-center'>
                    {/* Desktop Menu */}
                    <div className='hidden md:flex'>
                        {menuItems.map((item) => (
                            <NavbarLink
                                key={item.href}
                                href={item.href}
                                title={item.title}
                            />
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-gray-600 hover:text-red-600 px-2 py-1'
                        >
                            <span className='sr-only'>Open menu</span>☰
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className='md:hidden'>
                        {menuItems.map((item) => (
                            <div key={item.href}>
                                <Link
                                    href={item.href}
                                    className='block px-4 py-2 hover:bg-gray-100 hover:text-red-600'
                                >
                                    {item.title}
                                </Link>
                                <div className='pl-4 bg-gray-50'>
                                    <Link
                                        href='#'
                                        className='block px-4 py-2 hover:bg-gray-100'
                                    >
                                        Submenu 1
                                    </Link>
                                    <Link
                                        href='#'
                                        className='block px-4 py-2 hover:bg-gray-100'
                                    >
                                        Submenu 2
                                    </Link>
                                    <Link
                                        href='#'
                                        className='block px-4 py-2 hover:bg-gray-100'
                                    >
                                        Submenu 3
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
