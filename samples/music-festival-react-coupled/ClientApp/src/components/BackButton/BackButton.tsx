import styles from './BackButton.module.scss';

import Image from 'next/image';
import React, { ReactElement } from 'react';
import EpiserverLink from '../EpiserverLink';
import BackButtonProps from './BackButtonProps';

const BackButton = ({ previousUrl }: BackButtonProps): ReactElement => {
    return (
        <div className={styles.BackButton}>
            <EpiserverLink url={previousUrl} className={styles.Link} prefetch>
                <Image src="/back.svg" width="64" height="64" alt="Back" />
            </EpiserverLink>
        </div>
    );
};

export default React.memo(BackButton);
