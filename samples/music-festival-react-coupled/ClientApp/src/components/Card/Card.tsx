import styles from './Card.module.scss';

import React, { ReactElement } from 'react';
import EpiserverLink from '../EpiserverLink';
import { CardProps } from './CardProps';

const Card = ({ name, image, url }: CardProps): ReactElement => {
    return (
        <EpiserverLink url={url}>
            <div className={styles.card}>
                <div className={styles.round}>
                    {/* <ConditionalImage src={image} alt={name} /> */}
                </div>
                <div className={styles.info}>
                    <p>{name}</p>
                </div>
            </div>
        </EpiserverLink>
    );
};

export default React.memo(Card);
