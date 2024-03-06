import { ReactElement } from 'react';

import getComponentTypeForContent from '@/utils/getComponentTypeForContent';
import React from 'react';
import EpiserverGenericBlock from '../EpiserverGenericBlock';
import BlockComponentSelectorProps from './BlockComponentSelectorProps';

const BlockComponentSelector = ({
    content,
    mode,
}: BlockComponentSelectorProps): ReactElement => {
    if (content) {
        const BlockComponent = getComponentTypeForContent(content, mode);
        if (BlockComponent) {
            return <BlockComponent content={content} />;
        }
    }

    if (content) return <EpiserverGenericBlock content={content} />;

    return <></>;
};

export default React.memo(BlockComponentSelector);
