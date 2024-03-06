import styles from './Card.module.scss';

import React, { ReactElement } from 'react';
import ConditionalImage from '../ConditionalImage';
import EpiserverLink from '../EpiserverLink';
import CardProps from './CardProps';

const Card = ({ name, image, url }: CardProps): ReactElement => {
    return (
        <EpiserverLink url={url}>
            <div className={styles.Card}>
                <div className={styles.Round}>
                    <ConditionalImage
                        src={process.env.NEXT_PUBLIC_WEBSITE_URL + image}
                        alt={name}
                        width={60}
                        height={60}
                    />
                </div>
                <div className={styles.Info}>
                    <p>{name}</p>
                </div>
            </div>
        </EpiserverLink>
    );
};

export default React.memo(Card);
