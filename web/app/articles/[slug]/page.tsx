import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SidebarArticle from '@/components/Sidebar-article';
import Breadcrumb from '@/components/Breadcrumb';

async function getArticle(slug: string) {
    const STRAPI_URL = 'http://localhost:1337';
    const response = await fetch(
        `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
        { cache: 'no-store' }
    );
    const data = await response.json();
    return data.data[0];
}

export default async function ArticlePage({
    params,
}: {
    params: { slug: string };
}) {
    const STRAPI_URL = 'http://localhost:1337';
    const slug = await params.slug;
    const article = await getArticle(slug);

    if (!article) return <div>Loading...</div>;

    return (
        <div className='min-h-screen flex flex-col bg-gray-300'>
            <Navbar />

            <main className='flex-grow w-full max-w-7xl mx-auto px-4'>
                <div className='flex w-full py-8'>
                    <article className='bg-white overflow-hidden px-8 py-6 w-9/12'>
                        <h1 className='text-4xl font-bold mb-4 text-black'>
                            {article.title}
                        </h1>
                        <div className='relative h-96'>
                            <Image
                                className='object-cover'
                                src={STRAPI_URL + article.cover.url}
                                alt={article.title}
                                fill
                                priority
                            />
                        </div>
                        <div className='p-6'>
                            <span className='inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-4'>
                                GREMIALES
                            </span>
                            <div className='prose max-w-none'>
                                {article.content}
                            </div>
                        </div>
                    </article>
                    <SidebarArticle />
                </div>
                <Breadcrumb />
                <Footer />
            </main>
        </div>
    );
}
