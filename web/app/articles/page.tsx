import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Article } from '@/interfaces/Article';
import ArticleMain from '@/components/Article-main';

async function getArticles(): Promise<Article[]> {
    const STRAPI_URL = 'http://localhost:1337';
    const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
    const data = await response.json();
    return data.data as Article[];
}

export default async function ArticlesPage() {
    const STRAPI_URL = 'http://localhost:1337';
    const articles = await getArticles();

    if (!articles) return <div>Loading...</div>;

    return (
        <div className='min-h-screen flex flex-col bg-gray-300'>
            <Navbar />

            <main className='flex-grow w-full max-w-7xl mx-auto px-4'>
                <div className='w-full py-8'>
                    {/* Browse Bar */}
                    <div className='bg-white p-4 rounded-lg mb-8'>
                        <div className='flex items-center space-x-4'>
                            <input
                                type='text'
                                placeholder='Search articles...'
                                className='flex-1 p-2 border rounded-lg'
                            />
                            <select className='p-2 border rounded-lg'>
                                <option value=''>All Categories</option>
                                <option value='technology'>Technology</option>
                                <option value='science'>Science</option>
                                <option value='health'>Health</option>
                            </select>
                            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white '>
                        {articles.map((article) => (
                            <ArticleMain
                                key={article.id}
                                category={article.category?.name}
                                href={article.slug}
                                imageHref={article.cover?.url}
                                title={article.title}
                            />
                        ))}
                    </div>
                </div>
                <Breadcrumb />
                <Footer />
            </main>
        </div>
    );
}
