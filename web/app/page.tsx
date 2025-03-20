'use client'; // This is a client-side component

// Import React hooks and Image component
import { useEffect, useState } from 'react';
import { Article } from '@/interfaces/Article';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleMain from '@/components/Article-main';
import ArticleHome from '@/components/Article-home';

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
                    <div className='col-span-12'>
                        <div className='bg-white h-full'>
                            <div className='p-4 border-b border-gray-300'>
                                <h1 className='text-xs font-bold text-black'>
                                    NOVEDADES SINDICALES
                                </h1>
                            </div>

                            <div className='grid grid-cols-4 gap-0'>
                                {articles.length > 0 && (
                                    <>
                                        {/* Main Featured Article - 4x4 */}
                                        <div className='col-span-2 row-span-2 h-full'>
                                            <ArticleHome
                                                category={
                                                    articles[0].category?.name
                                                }
                                                href={articles[0].slug}
                                                imageHref={
                                                    articles[0].cover?.url
                                                }
                                                title={articles[0].title}
                                                key={articles[0].id}
                                            />
                                        </div>

                                        {/* Secondary Articles - Right Side 2x2 */}
                                        {articles.slice(1, 5).map((article) => (
                                            <div
                                                key={article.id}
                                                className='h-full'
                                            >
                                                <ArticleMain
                                                    category={
                                                        article.category?.name
                                                    }
                                                    href={article.slug}
                                                    imageHref={
                                                        article.cover?.url
                                                    }
                                                    title={article.title}
                                                />
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Breadcrumb />
                <Footer />
            </main>
        </div>
    );
}
