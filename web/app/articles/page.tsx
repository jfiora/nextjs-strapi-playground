import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Article } from '@/interfaces/Article';

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
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {articles.map((article) => (
                            <Link
                                href={`/articles/${article.slug}`}
                                key={article.id}
                                className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
                            >
                                <div className='relative h-48'>
                                    <Image
                                        src={STRAPI_URL + article.cover.url}
                                        alt={article.title}
                                        fill
                                        className='object-cover'
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    />
                                </div>
                                <div className='p-4'>
                                    <h2 className='text-xl font-bold mb-2 text-gray-800'>
                                        {article.title}
                                    </h2>
                                    <p className='text-gray-600 line-clamp-3'>
                                        {article.description}
                                    </p>
                                    <div className='mt-4 flex items-center text-sm text-gray-500'>
                                        <span>
                                            {new Date(
                                                article.publishedAt
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <Breadcrumb />
                <Footer />
            </main>
        </div>
    );
}
