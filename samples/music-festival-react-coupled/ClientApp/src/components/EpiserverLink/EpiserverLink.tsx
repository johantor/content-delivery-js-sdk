import useResolvedContent from '@/hooks/useResolvedContent';
import classNames from '@/utils/classNames';
import { ContextMode } from '@episerver/content-delivery';
import Link from 'next/link';
import { ReactElement } from 'react';
import EpiserverLinkProps from './EpiserverLinkProps';

const EpiserverLink = ({
    className,
    url,
    children,
    prefetch,
}: EpiserverLinkProps): ReactElement => {
    const { resolvedContent } = useResolvedContent();

    const useNextLink = resolvedContent.mode === ContextMode.Default;

    const tempHostname = 'http://temp';

    const siteUrl = new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || '');

    const relativeUrl = (): string => {
        // Make URL relative to enable client-side routing.
        const temp = new URL(url, tempHostname);

        if (temp.hostname === tempHostname) {
            return url;
        }

        // If URL is absolute, make it relative
        // when host is same as website.
        return temp.hostname === siteUrl.hostname
            ? temp.pathname + temp.search + temp.hash
            : url;
    };

    const classes = classNames(['EPiLink', className]);

    if (useNextLink)
        return (
            <Link href={relativeUrl()} className={classes} prefetch={prefetch}>
                {children}
            </Link>
        );
    else
        return (
            <a href={relativeUrl()} className={classes}>
                {children}
            </a>
        );
};

export default EpiserverLink;
