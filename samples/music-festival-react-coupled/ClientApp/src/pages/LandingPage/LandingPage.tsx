import EpiserverLink from '@/components/EpiserverLink';
import styles from './LandingPage.module.scss';

import BuyTicketBlock from '@/components/BuyTicketBlock';
import EpiserverContentArea from '@/components/EpiserverContentArea';
import Hero from '@/components/Hero';
import LanguageSelector from '@/components/LanguageSelector';
import Modal from '@/components/Modal';
import { addEditAttributes } from '@/utils/episerverAttributes';
import React, { ReactElement } from 'react';
import LandingPageProps from './LandingPageProps';

const LandingPage = ({ content }: LandingPageProps): ReactElement => {
    // TODO: Modal not implemented, require a restructure to support client side interactivity
    // const { showModal } = useModal();

    return (
        <div className={styles.LandingPage}>
            <nav className="Page-container PageHeader NavBar">
                <EpiserverLink
                    url={content.artistsLink.expanded.url}
                    className="Button modal-default-button landing-page-button"
                >
                    {content.artistsLink.expanded.name}
                </EpiserverLink>

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

            <Modal>
                <BuyTicketBlock
                    pagePropertyName="BuyTicketBlock"
                    heading={content.buyTicketBlock.heading}
                    message={content.buyTicketBlock.message}
                />
            </Modal>
        </div>
    );
};
export default React.memo(LandingPage);
