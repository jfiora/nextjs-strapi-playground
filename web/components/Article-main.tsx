import Image from 'next/image';
import Link from 'next/link';

interface ArticleMainProps {
    category?: string;
    href: string;
    imageHref?: string;
    title: string;
}

export default function ArticleMain({
    category,
    href,
    imageHref,
    title,
}: ArticleMainProps) {
    const STRAPI_URL = 'http://localhost:1337';

    return (
        <div className='p-4 border-b border-gray-300'>
            <Link href={href}>
                <div className='group cursor-pointer'>
                    {imageHref && (
                        <div className='relative aspect-video mb-3'>
                            <Image
                                src={STRAPI_URL + imageHref}
                                alt={title}
                                fill
                                className='object-cover'
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            />
                        </div>
                    )}
                    <div className='flex flex-col gap-2'>
                        {category && (
                            <span className='text-gray-400 text-sm font-semibold'>
                                {category}
                            </span>
                        )}
                        <h2 className='text-gray-900 font-semibold hover:text-red-600'>
                            {title}
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
}
