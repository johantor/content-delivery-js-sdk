import ArtistContainerPage from '@/pages/ArtistContainerPage';
import ArtistDetailsPage from '@/pages/ArtistDetailsPage';
import LandingPage from '@/pages/LandingPage';
import EpiContent from '@/types/EpiContent';
import { PageData } from '@episerver/content-delivery';
import { FunctionComponent } from 'react';

export const components: Record<string, FunctionComponent | undefined> = {
    LandingPage: LandingPage as FunctionComponent,
    ArtistContainerPage: ArtistContainerPage as FunctionComponent,
    ArtistDetailsPage: ArtistDetailsPage as FunctionComponent,
};

const getComponentTypeForContent = (
    content: PageData | undefined
): FunctionComponent<EpiContent> | undefined => {
    if (content) {
        const pageType = content?.contentType.slice(-1)[0]; // Get the content of the last element in the array

        if (pageType && components[pageType]) {
            return components[pageType];
        }
    }

    return undefined;
};

export default getComponentTypeForContent;
