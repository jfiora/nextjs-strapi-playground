'use client'; // This is a client-side component

// Import React hooks and Image component
import { useEffect, useState } from 'react';
import { Article } from '@/interfaces/Article';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleMain from '@/components/Article-main';
import ArticleHome from '@/components/Article-home';
import Image from 'next/image';
import AcuerdosIcon from '../public/acuerdos-icon.jpg';
import AportesIcon from '../public/aportes-icon.jpg';
import EmpresasIcon from '../public/empresas-icon.jpg';
import SalariosIcon from '../public/salarios-icon.jpg';

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
                <div className='grid grid-cols-12 py-8 gap-2'>
                    <div className='col-span-12'>
                        <div className='bg-white h-full'>
                            <div className='p-4 border-b border-gray-300'>
                                <h1 className='text-xs font-bold text-black'>
                                    AFILIACIONES
                                </h1>
                            </div>
                            <div className='flex flex-col items-center justify-center py-8 gap-8'>
                                <p className='text-black text-xs font-semibold text-center'>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.{' '}
                                    <br></br>
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.{' '}
                                    <br></br>
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                                <button className=' bg-green-500 text-white font-bold text-base tracking-widest px-8 py-3'>
                                    AFILIATE
                                </button>
                            </div>
                        </div>
                    </div>
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
                    <div className='col-span-12'>
                        <div className='bg-white h-full'>
                            <div className='p-4 border-b border-gray-300'>
                                <h1 className='text-xs font-bold text-black'>
                                    SITIOS DE INTERÉS
                                </h1>
                            </div>
                            <div className='grid grid-cols-4 py-8 gap-2'>
                                <div className='flex flex-col items-center justify-center'>
                                    <Image
                                        src={SalariosIcon}
                                        alt='Salarios'
                                        width={100}
                                        height={100}
                                    />
                                    <span className='text-black text-base font-semibold'>
                                        Salarios
                                    </span>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <Image
                                        src={EmpresasIcon}
                                        alt='Empresas'
                                        width={100}
                                        height={100}
                                    />
                                    <span className='text-black text-base font-semibold'>
                                        Empresas
                                    </span>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <Image
                                        src={AcuerdosIcon}
                                        alt='Acuerdos'
                                        width={100}
                                        height={100}
                                    />
                                    <span className='text-black text-base font-semibold'>
                                        Acuerdos
                                    </span>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <Image
                                        src={AportesIcon}
                                        alt='Aportes'
                                        width={100}
                                        height={100}
                                    />
                                    <span className='text-black text-base font-semibold'>
                                        Aportes
                                    </span>
                                </div>
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
