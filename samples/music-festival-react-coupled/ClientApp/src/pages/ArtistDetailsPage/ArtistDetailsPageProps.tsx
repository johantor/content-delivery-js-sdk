import { ContentData } from '@episerver/content-delivery';

export interface ArtistDetailsPage extends ContentData {
    artistDescription: string;
    artistGenre: string;
    artistPhoto: string;
    artistName: string;
    performanceEndTime: string;
    performanceStartTime: string;
    stageName: string;
}
