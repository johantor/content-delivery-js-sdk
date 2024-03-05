import { ReactElement } from 'react';
import ConditionalImage from '../ConditionalImage';
import ImageFileProps from './ImageFileProps';

const ImageFile = ({ content }: ImageFileProps): ReactElement => {
    return (
        <div className="Page-container ImageFile">
            <div className="Grid Grid--alignMiddle Grid--gutterA">
                <div className="Grid-cell">
                    <ConditionalImage
                        src={process.env.NEXT_PUBLIC_WEBSITE_URL + content.url}
                        alt=""
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageFile;
