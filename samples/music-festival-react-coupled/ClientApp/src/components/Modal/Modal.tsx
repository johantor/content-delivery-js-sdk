import React, { ReactElement } from 'react';
import ModalProps from './ModalProps';

const Modal = ({ active, hideModal, children }: ModalProps): ReactElement => {
    return (
        <>
            {active && (
                <div className="modal-mask">
                    <div className="modal-wrapper">
                        <div className="modal-container">
                            <div className="modal-content">{children}</div>
                            <div className="modal-footer">
                                <slot className="footer">
                                    <button
                                        className="Button modal-default-button"
                                        //onClick={() => hideModal()}
                                    >
                                        OK
                                    </button>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default React.memo(Modal);
