import classNames from '@/utils/classNames';
import { addEditAttributes } from '@/utils/episerverAttributes';
import React, { ReactElement } from 'react';
import ConditionalImage from '../ConditionalImage';
import EpiserverProperty from '../EpiserverProperty';
import ContentBlockProps from './ContentBlockProps';

const ContentBlock = ({ content }: ContentBlockProps): ReactElement => {
    const imageAlignment =
        content.imageAlignment === 'Right' ? 'Grid--rowReverse' : undefined;

    return (
        <div className="Page-container ContentBlock">
            <div
                className={classNames([
                    'Grid Grid--alignMiddle Grid--gutterA',
                    imageAlignment,
                ])}
            >
                {content.image && (
                    <div className="Grid-cell u-md-size1of2">
                        <ConditionalImage
                            src={
                                process.env.NEXT_PUBLIC_WEBSITE_URL +
                                content.image
                            }
                            alt={content.title}
                            width={1000}
                            height={1000}
                            {...addEditAttributes('Image')}
                        />
                    </div>
                )}
                <div
                    className={classNames([
                        'Grid-cell',
                        content.image ? 'u-md-size1of2' : undefined,
                    ])}
                >
                    <h2 {...addEditAttributes('Title')}>{content.title}</h2>
                    <div
                        {...addEditAttributes('Content')}
                        dangerouslySetInnerHTML={{ __html: content.content }}
                    />
                    {!content.image && (
                        <EpiserverProperty propertyName="image" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default React.memo(ContentBlock);
