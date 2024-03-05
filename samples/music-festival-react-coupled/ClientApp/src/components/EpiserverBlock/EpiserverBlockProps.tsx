import { ContentLink } from '@episerver/content-delivery';

export interface EpiserverBlock {
    contentLink: ContentLink;
    displayOption: string;
    inlineBlock: { contentType: [] };
    tag: string;
}

export default interface EpiserverBlockProps {
    content: EpiserverBlock;
}
