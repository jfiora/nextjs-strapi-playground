import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo-con-texto.jpg';

export default function Footer() {
    return (
        <footer className='bg-black text-gray-400 text-sm'>
            <div className='max-w-7xl mx-auto px-4 py-10'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex items-center gap-4'>
                        <Image src={Logo} alt='Logo' width={200} height={200} />
                        <div className='w-1/2'>
                            <h2 className='text-white text-2xl font-bold mb-4'>
                                CAMIONEROS
                            </h2>
                            <p className='mb-1'>
                                Copyright © 2025 Sindicato de Camioneros. Todos
                                los derechos reservados. Personeria Gremial N° 6
                            </p>
                            <p className='mb-1'>
                                San José 1781 (1136) CABA - Argentina
                            </p>
                            <p className='text-xs'>
                                Superintendencia de Servicios de Salud - Organo
                                de Control - 0800-222-SALUD (72583) -
                                <Link
                                    href='http://www.ssalud.gob.ar'
                                    className='hover:text-white'
                                >
                                    {' '}
                                    www.ssalud.gob.ar
                                </Link>{' '}
                                - R.N.O.S. 1-0580-4
                            </p>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-8 mt-6 md:mt-0'>
                        <div>
                            <h3 className='text-white font-bold mb-3'>
                                BENEFICIOS
                            </h3>
                            <ul className='space-y-2'>
                                <li>
                                    <Link
                                        href='/nacimientos'
                                        className='hover:text-white'
                                    >
                                        Nacimientos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/becas'
                                        className='hover:text-white'
                                    >
                                        Becas universitarias
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/discapacidad'
                                        className='hover:text-white'
                                    >
                                        Discapacidad
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/ambulancias'
                                        className='hover:text-white'
                                    >
                                        Ambulancias
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/fallecimientos'
                                        className='hover:text-white'
                                    >
                                        Fallecimientos
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/sepelios'
                                        className='hover:text-white'
                                    >
                                        Sepelios
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-white font-bold mb-3'>
                                VÍNCULOS
                            </h3>
                            <ul className='space-y-2'>
                                <li>
                                    <Link
                                        href='/obra-social'
                                        className='hover:text-white'
                                    >
                                        Obra social
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/federacion'
                                        className='hover:text-white'
                                    >
                                        Federación
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/mutual'
                                        className='hover:text-white'
                                    >
                                        Mutual Camioneros
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/itf'
                                        className='hover:text-white'
                                    >
                                        ITF
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/cgt'
                                        className='hover:text-white'
                                    >
                                        CGT
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/club'
                                        className='hover:text-white'
                                    >
                                        Club Camioneros
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-white font-bold mb-3'>
                                CONTÁCTENOS
                            </h3>
                            <ul className='space-y-2'>
                                <li>
                                    <Link href='#' className='hover:text-white'>
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className='hover:text-white'>
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className='hover:text-white'>
                                        Twitter
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className='hover:text-white'>
                                        TikTok
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className='hover:text-white'>
                                        YouTube
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/contacto'
                                        className='hover:text-white'
                                    >
                                        Contáctenos
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
