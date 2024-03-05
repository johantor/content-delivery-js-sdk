import { ContentData } from '@episerver/content-delivery';

export interface ArtistDetailsProps extends ContentData {
    artistDescription: string;
    artistGenre: string;
    artistPhoto: string;
    artistName: string;
    performanceEndTime: string;
    performanceStartTime: string;
    stageName: string;
    url: string;
}

export default interface ArtistDetailsPageProps {
    content: ArtistDetailsProps;
}
