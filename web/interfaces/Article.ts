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
    publishedAt: Date;
    slug: string;
    type: newsType;
}
