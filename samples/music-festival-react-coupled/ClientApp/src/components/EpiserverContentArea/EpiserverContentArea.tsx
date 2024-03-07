import classNames from '@/utils/classNames';
import displayOptions from '@/utils/displayOptions';
import getSSRContent from '@/utils/getSSRContent';
import { ContextMode } from '@episerver/content-delivery';
import React, { ReactElement } from 'react';
import EpiserverBlock from '../EpiserverBlock';
import EpiserverContentAreaProps from './EpiserverContentAreaProps';

const EpiserverContentArea = ({
    content,
}: EpiserverContentAreaProps): ReactElement => {
    const { resolvedContent } = getSSRContent();
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
                        resolvedContent.mode === ContextMode.Edit ||
                        resolvedContent.mode === ContextMode.Preview // TODO: Should this show in preview too?
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

export default React.memo(EpiserverContentArea);
