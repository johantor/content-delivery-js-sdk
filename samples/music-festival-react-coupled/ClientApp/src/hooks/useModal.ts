import { useState } from 'react';

const useModal = () => {
    const [active, setActive] = useState(false);

    const showModal = () => {
        setActive(true);
    };

    const hideModal = () => {
        setActive(false);
    };

    return {
        active,
        showModal,
        hideModal,
    };
};
export default useModal;
