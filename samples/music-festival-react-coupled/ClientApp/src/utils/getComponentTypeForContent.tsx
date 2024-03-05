import ContentBlock from '@/components/ContentBlock';
import EpiserverGenericBlock from '@/components/EpiserverGenericBlock';
import ImageFile from '@/components/ImageFile';
import ArtistContainerPage from '@/pages/ArtistContainerPage';
import ArtistDetailsPage from '@/pages/ArtistDetailsPage';
import LandingPage from '@/pages/LandingPage';
import EpiContent from '@/types/EpiContent';
import { ContentData } from '@episerver/content-delivery';
import { FunctionComponent } from 'react';

export const pages: Record<string, FunctionComponent | undefined> = {
    LandingPage: LandingPage as FunctionComponent,
    ArtistContainerPage: ArtistContainerPage as FunctionComponent,
    ArtistDetailsPage: ArtistDetailsPage as FunctionComponent,
};

export const blocks: Record<string, FunctionComponent | undefined> = {
    ContentBlock: ContentBlock as unknown as FunctionComponent,
    EpiserverGenericBlock: EpiserverGenericBlock as FunctionComponent,
};

export const other: Record<string, FunctionComponent | undefined> = {
    ImageFile: ImageFile as FunctionComponent,
};

const getComponentTypeForContent = (
    content: ContentData | undefined
): FunctionComponent<EpiContent> | undefined => {
    content?.contentType.join('');
    if (content) {
        const type = content?.contentType[0];
        const template = content?.contentType.slice(-1)[0]; // Get the content of the last element in the array

        if (type == 'Page') {
            if (template && pages[template]) {
                return pages[template];
            }
        } else if (type == 'Block') {
            if (template && blocks[template]) {
                return blocks[template];
            }
        } else {
            if (template && other[template]) {
                return other[template];
            }
        }
    }

    return undefined;
};

export default getComponentTypeForContent;
