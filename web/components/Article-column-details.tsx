'use client';
import React from 'react';

const ArticleColumnDetails = () => {
    const onClickPrint = () => {
        return;
    };

    const onClickEmail = () => {
        return;
    };

    return (
        <div className='flex flex-col text-xs mx-5'>
            <span className='text-gray-500 border-b py-2'>Camioneros</span>

            <span className='text-gray-500 border-b py-2'>
                26 de febrero 2025
            </span>

            <span
                onClick={onClickPrint}
                className='text-black border-b py-2 hover:text-red-600 hover:cursor-pointer'
            >
                Imprimir
            </span>

            <span
                onClick={onClickEmail}
                className='text-black border-b py-2 hover:text-red-600 hover:cursor-pointer'
            >
                Correo Electronico
            </span>
        </div>
    );
};

export default ArticleColumnDetails;
