import { PropsWithChildren } from 'react';

type EpiserverLinkProps = PropsWithChildren<{
    url: string;
    className?: string;
    prefetch?: boolean;
}>;

export default EpiserverLinkProps;
