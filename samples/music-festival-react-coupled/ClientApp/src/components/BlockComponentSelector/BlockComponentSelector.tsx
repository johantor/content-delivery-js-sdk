import React, { ReactElement } from 'react';

import getComponentTypeForContent from '@/utils/getComponentTypeForContent';
import EpiserverGenericBlock from '../EpiserverGenericBlock';
import BlockComponentSelectorProps from './BlockComponentSelectorProps';

function BlockComponentSelector({
    content,
}: BlockComponentSelectorProps): ReactElement {
    if (content) {
        const BlockComponent = getComponentTypeForContent(content);
        console.log('LOADING BLOCK', content);
        if (BlockComponent) {
            return <BlockComponent content={content} />;
        }
    }

    if (content) return <EpiserverGenericBlock content={content} />;

    return <></>;
}

export default React.memo(BlockComponentSelector);
