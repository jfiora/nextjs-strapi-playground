enum newsType {
    NEWS = 'news',
    EVENT = 'event',
    ARTICLE = 'article',
}
export interface Article {
    id: string;
    title: string;
    content: string;
    cover: any;
    category: any;
    publishedAt: Date;
    slug: string;
    description: string;
    type: newsType;
}
