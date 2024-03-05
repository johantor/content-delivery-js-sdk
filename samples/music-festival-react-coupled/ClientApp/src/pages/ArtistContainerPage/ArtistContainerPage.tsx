import styles from './ArtistContainerPage.module.scss';

import BackButton from '@/components/BackButton';
import Card from '@/components/Card';
import EpiContent from '@/types/EpiContent';
import { ContentLoader } from '@episerver/content-delivery';
import { ReactElement, useState } from 'react';
import { ArtistDetailsPage } from '../ArtistDetailsPage/ArtistDetailsPageProps';

const ArtistContainerPage = ({ content }: EpiContent): ReactElement => {
    const [artists, setArtists] = useState<[string, ArtistDetailsPage[]][]>([]);
    const [loading, setLoading] = useState(true);
    const contentLoader = new ContentLoader();

    if (loading)
        contentLoader
            .getChildren<ArtistDetailsPage>(content.contentLink.guidValue, {
                branch: content.language.name,
            })
            .then((children) => {
                const ordered: ArtistDetailsPage[] = children.sort(
                    (a, b): number =>
                        a.artistName.toLowerCase() < b.artistName.toLowerCase()
                            ? -1
                            : 1
                );

                // Group by first letter of artist name
                const artistsByLetter = ordered.reduce(
                    (
                        groups: {
                            [key: string]: ArtistDetailsPage[];
                        },
                        item: ArtistDetailsPage
                    ) => {
                        const letter = item.artistName.substring(0, 1);
                        groups[letter] = groups[letter] || [];
                        groups[letter].push(item);
                        return groups;
                    },
                    {}
                );
                setArtists(Object.entries(artistsByLetter));
            })
            .finally(() => setLoading(false));

    return (
        <div className={styles.ArtistContainerPage}>
            <nav className="Page-container PageHeader NavBar">
                <BackButton previousUrl={content.parentLink.url} />
                {/*
                <LanguageSelector
                    existingLanguages={content.existingLanguages}
                    language={content.language}
                />

                */}
            </nav>

            <div className="Page-container">
                <div className="top gutter">
                    <h1 v-epi-edit="'Name'">{content.name}</h1>
                </div>
                <div className="list">
                    {artists &&
                        artists.map((artist) => {
                            const [key, values] = artist;
                            return (
                                <div key={key}>
                                    <h3>{key}</h3>
                                    {values.map((value, key) => (
                                        <Card
                                            v-for="(value, key) in value"
                                            key={key}
                                            name={value.artistName}
                                            image={value.artistPhoto}
                                            url={value.url}
                                        />
                                    ))}
                                </div>
                            );
                        })}
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

export default ArtistContainerPage;
