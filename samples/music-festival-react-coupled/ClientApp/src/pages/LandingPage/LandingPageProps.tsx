import BuyTicketBlockProps from '@/components/BuyTicketBlock/buyTicketBlockProps';
import EpiBlock from '@/types/EpiBlock';
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
    footerContentArea: EpiBlock[];
    heroImage: string;
    mainContentArea: EpiBlock[];
    subtitle: string;
    title: string;
}

interface LandingPageProps extends EpiPageContent {
    content: LandingPageContent;
}

export default LandingPageProps;
