import { Article } from '@/interfaces/Article';
import React from 'react';
import ArticleImageExpand from './Article-image-expand';

const SidebarHomeRight = ({ articles }: { articles: Article[] }) => {
    return (
        <div className='bg-white h-full border-x border-gray-300'>
            <div className='p-4 border-b border-gray-300'>
                <h1 className='text-xs font-bold text-black'>NOVEDADES</h1>
            </div>
            <div className='p-4'>
                {articles
                    ?.filter((e) => e.category?.slug == 'novedades')
                    ?.map((e) => (
                        <ArticleImageExpand
                            key={e.id}
                            href={e.slug}
                            imageHref={e.cover?.url}
                        />
                    ))}
            </div>
        </div>
    );
};

export default SidebarHomeRight;
