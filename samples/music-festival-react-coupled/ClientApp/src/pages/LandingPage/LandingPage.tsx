import EpiserverLink from '@/components/EpiserverLink';
import styles from './LandingPage.module.scss';

import EpiserverContentArea from '@/components/EpiserverContentArea';
import Hero from '@/components/Hero';
import LanguageSelector from '@/components/LanguageSelector';
import { addEditAttributes } from '@/utils/episerverAttributes';
import React, { ReactElement } from 'react';
import LandingPageProps from './LandingPageProps';

const LandingPage = ({ content }: LandingPageProps): ReactElement => {
    // const { showModal } = useModal();
    return (
        <div className={styles.LandingPage}>
            <nav className="Page-container PageHeader NavBar">
                <button
                    className="Button buy-ticket-button"
                    // onClick={showModal()}
                >
                    {content.buyTicketBlock.heading}
                </button>

                <LanguageSelector
                    existingLanguages={content.existingLanguages}
                    language={content.language}
                />
            </nav>

            <Hero
                title={content.title}
                subtitle={content.subtitle}
                heroimage={content.heroImage}
            />

            <EpiserverLink
                url={content.artistsLink.expanded.url}
                className="Button modal-default-button landing-page-button"
            >
                {content.artistsLink.expanded.name}
            </EpiserverLink>

            <main className="Page-container">
                <div {...addEditAttributes('MainContentArea')}>
                    <EpiserverContentArea content={content.mainContentArea} />
                </div>
            </main>

            <footer>
                <div {...addEditAttributes('FooterContentArea')}>
                    <EpiserverContentArea content={content.footerContentArea} />
                </div>
                <div className="FooterBottom">
                    <h6>&copy; Music Festival 2022</h6>
                </div>
            </footer>
            {/*
                <Modal>
                    <template v-slot:content>
                        <BuyTicketBlock
                            :page-property-name="'BuyTicketBlock'"
                            :heading="model.buyTicketBlock.heading"
                            :message="model.buyTicketBlock.message"
                        />
                    </template>
                </Modal>
            */}
        </div>
    );
};
export default React.memo(LandingPage);
