'use client';

import React, { ReactElement, useState } from 'react';
import styles from './ClientComponent.module.scss';

const ClientComponent = (): ReactElement => {
    const [hello, setHello] = useState('world');

    return (
        <div className={styles.Block}>
            <div>ClientComponent with state: {hello}</div>
            <button
                onClick={() => {
                    setHello(hello === 'world' ? 'sweden' : 'world');
                }}
            >
                Click me!
            </button>
        </div>
    );
};

export default React.memo(ClientComponent);
