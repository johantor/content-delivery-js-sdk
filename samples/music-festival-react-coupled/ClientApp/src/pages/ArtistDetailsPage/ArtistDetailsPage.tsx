import ArtistImage from '@/components/ArtistImage';
import BackButton from '@/components/BackButton';
import EpiserverProperty from '@/components/EpiserverProperty';
import LanguageSelector from '@/components/LanguageSelector';
import { addEditAttributes } from '@/utils/episerverAttributes';
import { ReactElement } from 'react';
import ArtistDetailsPageProps from './ArtistDetailsPageProps';

const ArtistDetailsPage = ({
    content,
}: ArtistDetailsPageProps): ReactElement => {
    function friendlyDateTime(dateTime: string | number | Date) {
        return new Date(dateTime).toLocaleString('en');
    }

    const friendlyStartTime = friendlyDateTime(content.performanceStartTime);
    const friendlyEndTime = friendlyDateTime(content.performanceEndTime);
    return (
        <div className="ArtistDetailsPage">
            <nav className="Page-container PageHeader NavBar">
                <BackButton previousUrl={content.parentLink.url} />
                <LanguageSelector
                    existingLanguages={content.existingLanguages}
                    language={content.language}
                />
            </nav>

            <div className="Page-container u-posRelative">
                <ArtistImage
                    name={content.artistName}
                    imageUrl={content.artistPhoto}
                />
                <div className="top">
                    <h1 {...addEditAttributes('ArtistName')}>
                        {content.artistName}
                    </h1>
                </div>

                <EpiserverProperty propertyName="ArtistPhoto" />
                <EpiserverProperty propertyName="ArtistGenre" />
                <EpiserverProperty propertyName="ArtistIsHeadliner" />

                <div className="artist-information">
                    <p
                        {...addEditAttributes('StageName')}
                        dangerouslySetInnerHTML={{ __html: content.stageName }}
                    />
                    <p>
                        <span {...addEditAttributes('PerformanceStartTime')}>
                            {friendlyStartTime}
                        </span>
                        -
                        <span {...addEditAttributes('PerformanceEndTime')}>
                            {friendlyEndTime}
                        </span>
                    </p>
                </div>
                <div className="artist-description">
                    <div
                        {...addEditAttributes('ArtistDescription')}
                        dangerouslySetInnerHTML={{
                            __html: content.artistDescription,
                        }}
                    />
                </div>
            </div>

            <footer>
                <div className="FooterBottom">
                    <h6>&copy; Music Festival 2022</h6>
                </div>
            </footer>
        </div>
    );
};

export default ArtistDetailsPage;
