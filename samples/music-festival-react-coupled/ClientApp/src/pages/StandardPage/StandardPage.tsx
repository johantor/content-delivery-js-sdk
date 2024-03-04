import EpiContent from '@/types/EpiContent';
import { ReactElement } from 'react';

const StandardPage = ({ content }: EpiContent): ReactElement => {
    return (
        <div>
            This is a page
            <div>{JSON.stringify(content)}</div>
        </div>
    );
};
export default StandardPage;
