import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SidebarArticle from '@/components/Sidebar-article';
import Breadcrumb from '@/components/Breadcrumb';
import ArticleColumnDetails from '@/components/Article-column-details';
import { Article } from '@/interfaces/Article';

async function getArticle(slug: string): Promise<Article> {
    const STRAPI_URL = 'http://localhost:1337';
    const response = await fetch(
        `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
        { cache: 'no-store' }
    );
    const data = await response.json();
    return data.data[0] as Article;
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
                <div className='grid grid-cols-12 w-full py-8'>
                    <article className='bg-white overflow-hidden px-8 py-6 col-span-9'>
                        <h1 className='text-4xl font-bold mb-4 text-black'>
                            {article.title}
                        </h1>
                        <div className='grid grid-cols-12 w-full'>
                            <div className='col-span-3'>
                                <ArticleColumnDetails />
                            </div>
                            <div className='col-span-9'>
                                <div>
                                    <Image
                                        className='object-cover'
                                        src={STRAPI_URL + article.cover.url}
                                        alt={article.title}
                                        width={500}
                                        height={500}
                                        quality={100}
                                    />
                                </div>
                                <div className='prose max-w-none text-black py-4'>
                                    {article.description}
                                </div>
                            </div>
                        </div>
                    </article>
                    <div className='col-span-3'>
                        <SidebarArticle />
                    </div>
                </div>
                <Breadcrumb />
                <Footer />
            </main>
        </div>
    );
}
