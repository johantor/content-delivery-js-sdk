import { ContentData } from '@episerver/content-delivery';
import { ReactElement } from 'react';

const EpiserverPage = (model: ContentData): ReactElement => {
    return (
        <div>
            This is a page
            <div>{JSON.stringify(model)}</div>
        </div>
    );
};
export default EpiserverPage;
