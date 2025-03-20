import React from 'react';
import { PropsWithChildren } from "react";

type ModalProps = {
    title?: string;
    isOpened: boolean;
    onClose: () => void;
    footer: React.ReactNode;
}

const ModalGeneric = ({ children, title = "Poup", isOpened, footer, onClose }: PropsWithChildren<ModalProps>) => {
    if (!isOpened) return null; // Se não estiver aberto, não renderiza nada

    return (
        <div className="modal fade show" style={{ display: "block" }} role="dialog" aria-modal="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" onClick={onClose}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        {footer}
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalGeneric;