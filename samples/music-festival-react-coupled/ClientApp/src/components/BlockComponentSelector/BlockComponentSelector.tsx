import React, { ReactElement } from 'react';

import getComponentTypeForContent from '@/utils/getComponentTypeForContent';
import BlockComponentSelectorProps from './BlockComponentSelectorProps';

function BlockComponentSelector({
    content,
}: BlockComponentSelectorProps): ReactElement {
    if (content) {
        const BlockComponent = getComponentTypeForContent(content);

        if (BlockComponent) {
            return <BlockComponent content={content} />;
        }
    }

    return <></>;
}

export default React.memo(BlockComponentSelector);
