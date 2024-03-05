import BuyTicketBlockProps from '@/components/BuyTicketBlock/buyTicketBlockProps';
import { EpiserverBlock } from '@/components/EpiserverBlock/EpiserverBlockProps';
import { EpiPageContent } from '@/types/EpiContent';
import {
    ContentData,
    ContentLink,
    PageData,
} from '@episerver/content-delivery';

interface AristsLinkExpanded extends ContentData {
    url: string;
}

interface ArtistsLink extends ContentLink {
    expanded: AristsLinkExpanded;
}

interface LandingPageContent extends PageData {
    artistsLink: ArtistsLink;
    buyTicketBlock: BuyTicketBlockProps;
    footerContentArea: EpiserverBlock[];
    heroImage: string;
    mainContentArea: EpiserverBlock[];
    subtitle: string;
    title: string;
}

interface LandingPageProps extends EpiPageContent {
    content: LandingPageContent;
}

export default LandingPageProps;
