import { ReactElement } from 'react';
import BlockComponentSelector from '../BlockComponentSelector';
import EpiserverBlockProps from './EpiserverBlockProps';

const EpiserverBlock = ({ content }: EpiserverBlockProps): ReactElement => {
    return (
        <BlockComponentSelector
            content={content.contentLink.expanded}
        ></BlockComponentSelector>
    );
};

export default EpiserverBlock;
