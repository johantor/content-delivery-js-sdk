import React, { ReactElement } from 'react';
import EpiserverGenericBlockProps from './EpiserverGenericBlockProps';

const EpiserverGenericBlock = ({
    content,
}: EpiserverGenericBlockProps): ReactElement => {
    return (
        <div className="Page-container GenericBlock">
            <div className="Grid Grid--alignMiddle Grid--gutterA">
                <div className="Grid-cell">
                    <p>
                        {`Could not load ${content.name || 'the'} react component.`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(EpiserverGenericBlock);
