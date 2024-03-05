import { ContentData } from '@episerver/content-delivery';

interface ContentBlockContent extends ContentData {
    title: string;
    content: string;
    imageAlignment?: string;
    image?: string;
}

export default interface ContentBlockProps {
    content: ContentBlockContent;
}
