import { ContentLink } from '@episerver/content-delivery';

export interface EpiserverBlockContent {
    contentLink: ContentLink;
    displayOption: string;
    inlineBlock: { contentType: [] };
    tag: string;
}

export default interface EpiserverBlockProps {
    content: EpiserverBlockContent;
}
