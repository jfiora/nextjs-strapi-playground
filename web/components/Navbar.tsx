'use client';
import Link from 'next/link';
import NavbarLink from './Navbar-link';
import Image from 'next/image';
import Logo from '../public/logo-navbar.jpg';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: 'Home', href: '/' },
        { title: 'Articulos', href: '/articles' },
        { title: 'Contacto', href: '/contacto' },
        { title: 'Afiliación', href: '/afiliacion' },
    ];

    return (
        <nav className='bg-white text-black'>
            <div className='max-w-7xl mx-auto px-5'>
                <div className='flex justify-between items-center'>
                    <Image src={Logo} alt='Logo' width={65} height={65} />
                    {/* Desktop Menu */}
                    <div className='hidden md:flex'>
                        {menuItems?.map((item) => (
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
                            className='text-gray-600 hover:text-red-600 px-2 py-1 h-full'
                        >
                            <span className='sr-only'>Open menu</span>☰
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className='md:hidden'>
                        {menuItems?.map((item) => (
                            <div key={item.href}>
                                <Link
                                    href={item.href}
                                    className='block px-4 py-2 hover:bg-gray-100 hover:text-red-600'
                                >
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
