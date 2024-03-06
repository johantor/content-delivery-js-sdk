import classNames from '@/utils/classNames';
import getSSRContent from '@/utils/getSSRContent';
import { ContextMode } from '@episerver/content-delivery';
import React, { ReactElement } from 'react';
import EpiserverLink from '../EpiserverLink';
import EpiserverLinkProps from '../EpiserverLink/EpiserverLinkProps';
import styles from './EpiserverViewModeLink.module.scss';

const EpiserverViewModeLink = ({
    className,
    url,
    children,
}: EpiserverLinkProps): ReactElement => {
    const { resolvedContent } = getSSRContent();

    return (
        <EpiserverLink
            url={url}
            className={
                resolvedContent.mode === ContextMode.Edit
                    ? classNames([className, styles.EditMode])
                    : className
            }
        >
            {children}
        </EpiserverLink>
    );
};

export default React.memo(EpiserverViewModeLink);
