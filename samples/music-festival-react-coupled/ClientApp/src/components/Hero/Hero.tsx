import { addEditAttributes } from '@/utils/episerverAttributes';
import React, { ReactElement } from 'react';
import EpiserverProperty from '../EpiserverProperty';
import styles from './Hero.module.scss';
import HeroProps from './HeroProps';

const Hero = ({ title, subtitle, heroimage }: HeroProps): ReactElement => {
    // const { active as modalActive } = useModal();
    const modalActive = false;

    return (
        <section className={styles.Hero}>
            <div className={`${styles.HeroContent} Page-container`}>
                <h1
                    {...addEditAttributes('Title')}
                    dangerouslySetInnerHTML={{ __html: title }}
                ></h1>
                <h5
                    {...addEditAttributes('Subtitle')}
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                ></h5>
                {!modalActive && <EpiserverProperty propertyName="HeroImage" />}
            </div>
            {heroimage && (
                <div
                    className={styles.HeroImage}
                    style={{ backgroundImage: `url(${heroimage})` }}
                />
            )}
        </section>
    );
};

export default React.memo(Hero);
