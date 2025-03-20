import Image from 'next/image';
import Link from 'next/link';

interface ArticleHomeProps {
    category?: string;
    href: string;
    imageHref?: string;
    title: string;
}

export default function ArticleHome({
    category,
    href,
    imageHref,
    title,
}: ArticleHomeProps) {
    const STRAPI_URL = 'http://localhost:1337';

    return (
        <div className='p-4 border-x border-b h-full'>
            <Link href={`/articles/${href}`}>
                <div className='group cursor-pointer'>
                    {/* Image Container with fixed dimensions */}
                    <div className='relative w-full h-[500px] mb-3 overflow-hidden'>
                        <Image
                            src={STRAPI_URL + imageHref}
                            alt={title}
                            fill
                            className='object-cover group-hover:scale-105 transition-transform duration-300'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                    </div>

                    {/* Category Tag */}
                    <div className='mb-2'>
                        <span className='bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5'>
                            {(category || 'GREMIALES').toUpperCase()}
                        </span>
                    </div>

                    <div className='flex flex-col gap-5'>
                        {/* Title */}
                        <h2 className='text-xs font-semibold text-gray-900 line-clamp-2 hover:text-red-600'>
                            {title}
                        </h2>

                        {/* Link to article */}
                        <span className='text-gray-400 text-sm font-semibold hover:text-red-600'>
                            Leer más...
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
