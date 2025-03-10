import Image from 'next/image';
import React from 'react';

interface ArticleImageExpandProps {
    href: string;
    imageHref: string;
}

const ArticleImageExpand = ({ href, imageHref }: ArticleImageExpandProps) => {
    const STRAPI_URL = 'http://localhost:1337';

    return (
        <div>
            <Image
                src={STRAPI_URL + imageHref}
                alt='SidebarArticle'
                className='w-full'
                width={500}
                height={500}
                quality={100}
            />
            <a
                href={href}
                className='text-red-600 text-xs hover:cursor-pointer'
            >
                +ampliar
            </a>
        </div>
    );
};

export default ArticleImageExpand;
