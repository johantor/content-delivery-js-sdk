import Image from 'next/image';
import React, { ReactElement } from 'react';
import ConditionalImageProps from './ConditionalImageProps';

const ConditionalImage = ({
    src,
    alt,
    ...props
}: ConditionalImageProps): ReactElement => {
    return <>{src && <Image src={src} alt={alt} {...props} />}</>;
};

export default React.memo(ConditionalImage);
