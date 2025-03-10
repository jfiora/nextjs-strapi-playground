import React from 'react';
import Image from 'next/image';

const SidebarHomeLeft = () => {
    return (
        <div className='bg-white border-x border-gray-300'>
            <Image
                src={'/logo-con-texto.jpg'}
                alt='SidebarArticle'
                className='w-full'
                width={1000}
                height={1000}
                quality={100}
            />
            <div className='p-4 border-b border-gray-300'>
                <Image
                    src={'/avenida_ch.jpg'}
                    alt='SidebarArticle'
                    className='w-full'
                    width={100}
                    height={100}
                />
            </div>
            <div className='p-4 border-b border-gray-300'>
                <h1 className='text-xs font-bold text-black'>NUESTRA MISIÓN</h1>
            </div>
            <div className='p-4'>
                <p className='text-xs text-gray-500'>
                    Defender y representar ante el Estado y los empleadores los
                    intereses profesionales e individuales de los trabajadores
                    ocupados en la actividad económica del transporte de carga
                    por automotor.<br></br>
                    <br></br> Promover la participación de la Entidad Sindical
                    en los organismos Nacionales, Provinciales, Municipales e
                    Internacionales.<br></br>
                    <br></br> Promover la unión y la organización gremial de los
                    trabajadores de la actividad de carga por automotor.
                    <br></br>
                    <br></br> Promover la consolidación del espíritu sindical y
                    asegurar la efectiva militancia sindical.
                </p>
            </div>
        </div>
    );
};

export default SidebarHomeLeft;
