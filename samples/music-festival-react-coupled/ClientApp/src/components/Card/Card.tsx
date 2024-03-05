import styles from './Card.module.scss';

import Image from 'next/image';
import React, { ReactElement } from 'react';
import EpiserverLink from '../EpiserverLink';
import { CardProps } from './CardProps';

const Card = ({ name, image, url }: CardProps): ReactElement => {
    return (
        <EpiserverLink url={url}>
            <div className={styles.card}>
                <div className={styles.round}>
                    <Image
                        src={process.env.NEXT_PUBLIC_WEBSITE_URL + image}
                        alt={name}
                        width={60}
                        height={60}
                    />
                </div>
                <div className={styles.info}>
                    <p>{name}</p>
                </div>
            </div>
        </EpiserverLink>
    );
};

export default React.memo(Card);
