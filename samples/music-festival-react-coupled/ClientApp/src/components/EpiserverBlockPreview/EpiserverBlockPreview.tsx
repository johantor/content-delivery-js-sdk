import styles from './EpiserverBlockPreview.module.scss';

import React, { ReactElement } from 'react';
import BlockComponentSelector from '../BlockComponentSelector';
import EpiserverBlockPreviewProps from './EpiserverBlockPreviewProps';

const EpiserverBlockPreview = ({
    content,
}: EpiserverBlockPreviewProps): ReactElement => {
    return (
        <div className={styles.previewWrapper}>
            <section className={`Preview ${styles.Grid}`}>
                <div className={`Grid-cell ${styles.uBorder}`}>
                    <h5>Full</h5>
                </div>
                <div className="Grid-cell u-md-sizeFull">
                    <BlockComponentSelector
                        content={content}
                    ></BlockComponentSelector>
                </div>

                <div className={`Grid-cell ${styles.uBorder}`}>
                    <h5>Wide</h5>
                </div>
                <div className="Grid-cell u-md-size2of3">
                    <BlockComponentSelector
                        content={content}
                    ></BlockComponentSelector>
                </div>

                <div className={`Grid-cell ${styles.uBorder}`}>
                    <h5>Half</h5>
                </div>
                <div className="Grid-cell u-md-size1of2">
                    <BlockComponentSelector
                        content={content}
                    ></BlockComponentSelector>
                </div>

                <div className={`Grid-cell ${styles.uBorder}`}>
                    <h5>Narrow</h5>
                </div>
                <div className="Grid-cell u-md-size1of3">
                    <BlockComponentSelector
                        content={content}
                    ></BlockComponentSelector>
                </div>
            </section>
        </div>
    );
};

export default React.memo(EpiserverBlockPreview);
