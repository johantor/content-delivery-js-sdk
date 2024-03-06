import ContentBlock from '@/components/ContentBlock';
import EpiserverBlockPreview from '@/components/EpiserverBlockPreview';
import EpiserverGenericBlock from '@/components/EpiserverGenericBlock';
import ImageFile from '@/components/ImageFile';
import ArtistContainerPage from '@/pages/ArtistContainerPage';
import ArtistDetailsPage from '@/pages/ArtistDetailsPage';
import LandingPage from '@/pages/LandingPage';
import EpiContent from '@/types/EpiContent';
import { ContentData, ContextMode } from '@episerver/content-delivery';
import { FunctionComponent } from 'react';

export const pages: Record<string, unknown | undefined> = {
    LandingPage: LandingPage,
    ArtistContainerPage: ArtistContainerPage,
    ArtistDetailsPage: ArtistDetailsPage,
};

export const blocks: Record<string, unknown | undefined> = {
    ContentBlock: ContentBlock,
    EpiserverGenericBlock: EpiserverGenericBlock,
    EpiserverBlockPreview: EpiserverBlockPreview,
};

export const other: Record<string, unknown | undefined> = {
    ImageFile: ImageFile,
};

const getComponentTypeForContent = (
    content: ContentData | undefined,
    mode?: ContextMode
): FunctionComponent<EpiContent> | unknown => {
    content?.contentType.join('');
    if (content) {
        const type = content?.contentType[0];
        const template = content?.contentType.slice(-1)[0]; // Get the content of the last element in the array

        if (type == 'Page') {
            if (template && pages[template]) {
                return pages[template] as FunctionComponent;
            }
        } else if (type == 'Block') {
            if (template && blocks[template]) {
                if (mode == ContextMode.Preview) return EpiserverBlockPreview;
                else return blocks[template] as FunctionComponent;
            }
        } else {
            if (template && other[template]) {
                return other[template] as FunctionComponent;
            }
        }
    }

    return undefined;
};

export default getComponentTypeForContent;
