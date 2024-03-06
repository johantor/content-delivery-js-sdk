import styles from './BuyTicketBlock.module.scss';

import { addEditAttributes } from '@/utils/episerverAttributes';
import React, { ReactElement } from 'react';
import BuyTicketBlockProps from './BuyTicketBlockProps';

const BuyTicketBlock = ({
    heading,
    message,
    pagePropertyName,
}: BuyTicketBlockProps): ReactElement => {
    const prefixPropertyName = (propertyName: string): string => {
        return pagePropertyName
            ? `${pagePropertyName}.${propertyName}`
            : propertyName;
    };

    return (
        <div className={styles.buyTickets}>
            <h3 {...addEditAttributes(prefixPropertyName('Heading'))}>
                {heading || ''}
            </h3>
            <div>
                <label
                    htmlFor="tickets-email"
                    {...addEditAttributes(prefixPropertyName('Message'))}
                >
                    {message || ''}
                    <input id="tickets-email" type="email" />
                </label>
            </div>
        </div>
    );
};

export default React.memo(BuyTicketBlock);
