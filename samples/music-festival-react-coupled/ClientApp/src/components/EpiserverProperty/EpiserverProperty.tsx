import useResolvedContent from '@/hooks/useResolvedContent';
import { addEditAttributes } from '@/utils/episerverAttributes';
import { ContextMode } from '@episerver/content-delivery';
import React, { ReactElement } from 'react';
import EpiserverPropertyProps from './EpiserverPropertyProps';

const EpiserverProperty = ({
    propertyName,
}: EpiserverPropertyProps): ReactElement => {
    const { resolvedContent } = useResolvedContent();

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
