'use client'; // This is a client-side component

// Import React hooks and Image component
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/interfaces/Article';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
    const STRAPI_URL = 'http://localhost:1337';

    const [articles, setArticles] = useState<Article[]>([]);
    const getArticles = async () => {
        const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
        const data = await response.json();
        setArticles(data.data);
    };
    useEffect(() => {
        getArticles();
    }, []);
    return (
        <div className='min-h-screen flex flex-col bg-gray-300'>
            <Navbar />

            <main className='flex-grow w-full max-w-7xl mx-auto px-4'>
                <div className='py-8'>
                    <h2 className='text-2xl font-bold mb-6'>
                        Novedades Sindicales
                    </h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {articles.map((article) => (
                            <article
                                key={article.id}
                                className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
                            >
                                <div className='relative h-48'>
                                    <Image
                                        className='object-cover'
                                        src={STRAPI_URL + article.cover.url}
                                        alt={article.title}
                                        fill
                                        priority
                                    />
                                </div>
                                <div className='p-4'>
                                    <span className='inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2'>
                                        GREMIALES
                                    </span>
                                    <h3 className='text-lg font-bold mb-2'>
                                        {article.title}
                                    </h3>
                                    <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
                                        {article.content}
                                    </p>
                                    <Link
                                        href={`/articles/${article.slug}`}
                                        className='text-blue-600 text-sm hover:underline'
                                    >
                                        Leer más...
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
