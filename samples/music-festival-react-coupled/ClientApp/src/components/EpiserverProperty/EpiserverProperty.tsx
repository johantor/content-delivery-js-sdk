import { addEditAttributes } from '@/utils/episerverAttributes';
import getSSRContent from '@/utils/getSSRContent';
import { ContextMode } from '@episerver/content-delivery';
import React, { ReactElement } from 'react';
import EpiserverPropertyProps from './EpiserverPropertyProps';

const EpiserverProperty = ({
    propertyName,
}: EpiserverPropertyProps): ReactElement => {
    const { resolvedContent } = getSSRContent();

    return (
        <>
            {resolvedContent.mode === ContextMode.Edit && (
                <button {...addEditAttributes(propertyName)} type="button">
                    Edit property: {propertyName}
                </button>
            )}
        </>
    );
};

export default React.memo(EpiserverProperty);
