'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: 'Sindicato', href: '/sindicato' },
        { title: 'Secretarías', href: '/secretarias' },
        { title: 'Empresas', href: '/empresas' },
        { title: 'Turismo', href: '/turismo' },
        { title: 'Gremiales', href: '/gremiales' },
        { title: 'Obra social', href: '/obra-social' },
    ];

    return (
        <nav className='bg-blue-900 text-white'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex items-center'>
                        <Link href='/' className='text-xl font-bold'>
                            Sindicato de Camioneros
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex space-x-4'>
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className='hover:bg-blue-800 px-3 py-2 rounded'
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-white hover:bg-blue-800 px-2 py-1 rounded'
                        >
                            <span className='sr-only'>Open menu</span>☰
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className='md:hidden'>
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className='block px-3 py-2 hover:bg-blue-800'
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
