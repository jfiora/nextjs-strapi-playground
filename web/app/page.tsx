'use client'; // This is a client-side component

// Import React hooks and Image component
import { useEffect, useState } from 'react';
import { Article } from '@/interfaces/Article';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SidebarHomeRight from '@/components/Sidebar-home-right';
import SidebarHomeLeft from '@/components/Sidebar-home-left';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleMain from '@/components/Article-main';

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
        <div className='min-h-screen flex flex-col bg-gray-100'>
            <Navbar />

            <main className='flex-grow w-full max-w-7xl mx-auto px-4'>
                <div className='grid grid-cols-12 py-8'>
                    {/* Left Sidebar */}
                    <div className='col-span-3'>
                        <SidebarHomeLeft />
                    </div>

                    {/* Main Content */}
                    <div className='col-span-7'>
                        <div className='bg-white h-full'>
                            <div className='p-4 border-b border-gray-300'>
                                <h1 className='text-xs font-bold text-black'>
                                    NOVEDADES SINDICALES
                                </h1>
                            </div>

                            <div className='grid grid-cols-3'>
                                {articles.map((article) => (
                                    <ArticleMain
                                        category={article.category?.name}
                                        href={article.slug}
                                        imageHref={article.cover?.url}
                                        title={article.title}
                                        key={article.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className='col-span-2'>
                        <SidebarHomeRight articles={articles} />
                    </div>
                </div>
                <Breadcrumb />
                <Footer />
            </main>
        </div>
    );
}
