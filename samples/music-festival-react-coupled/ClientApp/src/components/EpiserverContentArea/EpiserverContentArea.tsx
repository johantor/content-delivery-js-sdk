import classNames from '@/utils/classNames';
import displayOptions from '@/utils/displayOptions';
import getContent from '@/utils/getContent';
import { ContextMode } from '@episerver/content-delivery';
import React, { ReactElement } from 'react';
import EpiserverBlock from '../EpiserverBlock';
import EpiserverContentAreaProps from './EpiserverContentAreaProps';

const EpiserverProperty = ({
    content,
}: EpiserverContentAreaProps): ReactElement => {
    const { resolvedContent } = getContent();
    const { getDisplayOption } = displayOptions();

    return (
        <section className="Grid Grid--alignMiddle Grid--gutterA ContentArea">
            {content.map((block, index) => (
                <div
                    className={classNames([
                        'Grid-cell',
                        getDisplayOption(block.displayOption),
                    ])}
                    key={index}
                    data-epi-content-id={
                        resolvedContent.mode === ContextMode.Edit
                            ? block.contentLink.guidValue
                            : null
                    }
                >
                    <EpiserverBlock content={block} />
                </div>
            ))}
        </section>
    );
};

export default React.memo(EpiserverProperty);
