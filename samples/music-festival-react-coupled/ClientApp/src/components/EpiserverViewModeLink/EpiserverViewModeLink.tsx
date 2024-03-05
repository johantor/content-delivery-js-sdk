import useResolvedContent from '@/hooks/useResolvedContent';
import classNames from '@/utils/classNames';
import { ContextMode } from '@episerver/content-delivery';
import { ReactElement } from 'react';
import EpiserverLink from '../EpiserverLink';
import EpiserverLinkProps from '../EpiserverLink/EpiserverLinkProps';
import styles from './EpiserverViewModeLink.module.scss';

const EpiserverViewModeLink = ({
    className,
    url,
    children,
}: EpiserverLinkProps): ReactElement => {
    const { resolvedContent } = useResolvedContent();

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

export default EpiserverViewModeLink;
