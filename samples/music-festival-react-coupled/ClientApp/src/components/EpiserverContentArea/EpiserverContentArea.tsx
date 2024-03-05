import useResolvedContent from '@/hooks/useResolvedContent';
import { ContextMode } from '@episerver/content-delivery';
import React, { ReactElement } from 'react';
import EpiserverBlock from '../EpiserverBlock';
import EpiserverContentAreaProps from './EpiserverContentAreaProps';

const EpiserverProperty = ({
    content,
}: EpiserverContentAreaProps): ReactElement => {
    const { resolvedContent } = useResolvedContent();
    // const { getDisplayOption } = useDisplayOptions();

    return (
        <section className="Grid Grid--alignMiddle Grid--gutterA ContentArea">
            {content.map((block, index) => (
                <div
                    className="Grid-cell"
                    key={index}
                    data-epi-content-id={
                        resolvedContent.mode === ContextMode.Edit
                            ? block.contentLink.guidValue
                            : null
                    }
                    // :class="getDisplayOption(block.displayOption)"
                >
                    <EpiserverBlock content={block} />
                </div>
            ))}
        </section>
    );
};

export default React.memo(EpiserverProperty);
