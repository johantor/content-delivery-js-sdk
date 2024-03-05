import styles from './ArtistImage.module.scss';

import Image from 'next/image';
import React, { ReactElement } from 'react';
import { ArtistImageProps } from './ArtistImageProps';

const ArtistImage = ({ imageUrl, name }: ArtistImageProps): ReactElement => {
    return (
        <div className={styles.artistImage}>
            <div>
                {imageUrl && (
                    <Image
                        src={process.env.NEXT_PUBLIC_WEBSITE_URL + imageUrl}
                        alt={name}
                        width={2000}
                        height={2000}
                    />
                )}
            </div>
        </div>
    );
};

export default React.memo(ArtistImage);
