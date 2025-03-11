'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaChevronRight, FaArrowUp } from 'react-icons/fa';

export default function Breadcrumb() {
    const pathname = usePathname();
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Create breadcrumb items from pathname
    const getBreadcrumbs = () => {
        const paths = pathname.split('/').filter((path) => path);
        return paths?.map((path, index) => {
            const href = '/' + paths.slice(0, index + 1).join('/');
            // Decode URL-encoded strings and capitalize first letter
            const label = decodeURIComponent(path).replace(/-/g, ' ');
            const formattedLabel =
                label.charAt(0).toUpperCase() + label.slice(1);
            return { href, label: formattedLabel };
        });
    };

    // Handle scroll event for back to top button
    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='relative w-full bg-gray-900'>
            <nav className='flex items-center py-4 text-sm mx-4'>
                <span className='text-white'>Está aquí: </span>
                <Link
                    href='/'
                    className='text-gray-500 hover:text-white transition-colors mx-2'
                >
                    Inicio
                </Link>
                {getBreadcrumbs()?.map((item, index) => (
                    <div key={item.href} className='flex items-center'>
                        <FaChevronRight react-icons='mx-2 text-gray-500' />
                        <Link
                            href={item.href}
                            className='text-gray-500 hover:text-white transition-colors mx-2'
                        >
                            {item.label}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    );
}
