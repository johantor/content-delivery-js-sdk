import { ContentLink } from '@episerver/content-delivery';

export default interface EpiBlock {
    contentLink: ContentLink;
    displayOption: string;
    inlineBlock: { contentType: [] };
    tag: string;
}
