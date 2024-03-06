import { PropsWithChildren } from 'react';

type ModalProps = PropsWithChildren<{
    active?: boolean;
    hideModal?: () => void;
}>;

export default ModalProps;
