import styles from './LanguageSelector.module.scss';

import React, { ReactElement } from 'react';
import EpiserverViewModeLink from '../EpiserverViewModeLink';
import LanguageSelectorProps from './LanguageSelectorProps';

const LanguageSelector = ({
    language,
    existingLanguages,
}: LanguageSelectorProps): ReactElement => {
    return (
        <div className={styles.LanguageSelector}>
            <ul className="lang">
                {existingLanguages.map((item) => (
                    <li
                        key={item.name}
                        className={item.name === language.name ? 'active' : ''}
                    >
                        <EpiserverViewModeLink url={item.link}>
                            {item.displayName}
                        </EpiserverViewModeLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(LanguageSelector);
