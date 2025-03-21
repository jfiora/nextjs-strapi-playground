'use client'; // This is a client-side component

// Import React hooks and Image component
import { useEffect, useState } from 'react';
import { Article } from '@/interfaces/Article';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import MainImage from '../public/main-image.jpg';
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

            <main className='flex-grow w-full mx-auto'>
                <div className='grid grid-cols-12 h-full'>
                    <div className='col-span-12 h-full'>
                        <div className='bg-green-600 h-full'>
                            <div className='grid grid-cols-2 gap-8'>
                                <div className='flex items-center'>
                                    <Image
                                        src={MainImage}
                                        alt='Truck'
                                        width={600}
                                        height={400}
                                        className='object-cover w-full h-full'
                                    />
                                </div>
                                <div className='flex flex-col justify-center px-12 py-16 gap-8'>
                                    <h1 className='white text-7xl font-bold'>
                                        SINDICATO <br />
                                        CAMIONEROS
                                    </h1>
                                    <p className='text-white text-l leading-relaxed'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <button className='bg-white text-green-600 font-bold text-lg w-fit px-8 py-4 transition-colors rounded'>
                                        AFILIATE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 bg-white'>
                        <div className='max-w-7xl mx-auto px-4'>
                            <div className='grid grid-cols-3 gap-16 py-24'>
                                {/* Services */}
                                <div className='flex flex-col items-center text-center'>
                                    <div className='mb-6'>
                                        <Image
                                            src={SalariosIcon}
                                            alt='Salarios'
                                            width={80}
                                            height={80}
                                            className='object-contain'
                                        />
                                    </div>
                                    <h3 className='text-gray-800 text-2xl font-semibold mb-4'>
                                        Salarios
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed'>
                                        Ofrecemos información actualizada sobre
                                        escalas salariales y beneficios para
                                        todos los trabajadores del sector.
                                    </p>
                                </div>

                                {/* Markets */}
                                <div className='flex flex-col items-center text-center'>
                                    <div className='mb-6'>
                                        <Image
                                            src={EmpresasIcon}
                                            alt='Empresas'
                                            width={80}
                                            height={80}
                                            className='object-contain'
                                        />
                                    </div>
                                    <h3 className='text-gray-800 text-2xl font-semibold mb-4'>
                                        Empresas
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed'>
                                        Trabajamos con las principales empresas
                                        del sector para asegurar condiciones
                                        laborales óptimas.
                                    </p>
                                </div>

                                {/* About */}
                                <div className='flex flex-col items-center text-center'>
                                    <div className='mb-6'>
                                        <Image
                                            src={AportesIcon}
                                            alt='Aportes'
                                            width={80}
                                            height={80}
                                            className='object-contain'
                                        />
                                    </div>
                                    <h3 className='text-gray-800 text-2xl font-semibold mb-4'>
                                        Aportes
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed'>
                                        Gestionamos y aseguramos los aportes
                                        sindicales para mantener servicios de
                                        calidad para nuestros afiliados.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 bg-white'>
                        <div className='max-w-7xl mx-auto px-4'>
                            <div className='grid grid-cols-3 gap-16 py-24'>
                                {/* Services */}
                                <div className='flex flex-col items-center text-center'>
                                    <div className='mb-6'>
                                        <Image
                                            src={SalariosIcon}
                                            alt='Salarios'
                                            width={80}
                                            height={80}
                                            className='object-contain'
                                        />
                                    </div>
                                    <h3 className='text-gray-800 text-2xl font-semibold mb-4'>
                                        Salarios
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed'>
                                        Ofrecemos información actualizada sobre
                                        escalas salariales y beneficios para
                                        todos los trabajadores del sector.
                                    </p>
                                </div>

                                {/* Markets */}
                                <div className='flex flex-col items-center text-center'>
                                    <div className='mb-6'>
                                        <Image
                                            src={EmpresasIcon}
                                            alt='Empresas'
                                            width={80}
                                            height={80}
                                            className='object-contain'
                                        />
                                    </div>
                                    <h3 className='text-gray-800 text-2xl font-semibold mb-4'>
                                        Empresas
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed'>
                                        Trabajamos con las principales empresas
                                        del sector para asegurar condiciones
                                        laborales óptimas.
                                    </p>
                                </div>

                                {/* About */}
                                <div className='flex flex-col items-center text-center'>
                                    <div className='mb-6'>
                                        <Image
                                            src={AportesIcon}
                                            alt='Aportes'
                                            width={80}
                                            height={80}
                                            className='object-contain'
                                        />
                                    </div>
                                    <h3 className='text-gray-800 text-2xl font-semibold mb-4'>
                                        Aportes
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed'>
                                        Gestionamos y aseguramos los aportes
                                        sindicales para mantener servicios de
                                        calidad para nuestros afiliados.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}
