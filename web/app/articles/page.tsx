'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Article } from '@/interfaces/Article';
import ArticleMain from '@/components/Article-main';

export default function ArticlesPage() {
    const STRAPI_URL = 'http://localhost:1337';
    const [articles, setArticles] = useState<Article[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const getArticles = async () => {
        const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
        const data = await response.json();
        setArticles(data.data);
    };

    useEffect(() => {
        getArticles();
    }, []);

    // Filter and sort articles
    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedArticles = [...filteredArticles].sort((a, b) => {
        switch (sortOrder) {
            case 'az':
                return a.title.localeCompare(b.title);
            case 'za':
                return b.title.localeCompare(a.title);
            case 'recent':
                return (
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                );
            case 'oldest':
                return (
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
                );
            default:
                return 0;
        }
    });

    return (
        <div className='min-h-screen flex flex-col bg-gray-300'>
            <Navbar />

            <main className='flex-grow w-full max-w-7xl mx-auto px-4'>
                <div className='w-full py-8'>
                    {/* Browse Bar */}
                    <div className='bg-white p-4 rounded-lg mb-8'>
                        <div className='flex items-center gap-4'>
                            <input
                                type='text'
                                placeholder='Buscar artículos...'
                                className='flex-1 p-2 border rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <select
                                className='p-2 border rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value=''>Ordenar por...</option>
                                <option value='az'>A-Z</option>
                                <option value='za'>Z-A</option>
                                <option value='recent'>Más recientes</option>
                                <option value='oldest'>Más antiguos</option>
                            </select>
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-4'>
                        {sortedArticles.map((article) => (
                            <ArticleMain
                                key={article.id}
                                category={article.category?.name}
                                href={article.slug}
                                imageHref={article.cover?.url}
                                title={article.title}
                            />
                        ))}
                    </div>
                </div>
                <Breadcrumb />
                <Footer />
            </main>
        </div>
    );
}
