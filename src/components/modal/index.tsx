import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {

    if (!isOpen) return null;

    return createPortal(
        <div className={`modal-wrapper absolute w-full h-full z-50 flex items-center justify-center opacity-1 top-0 left-0`}>
            {children}
        </div>, document.body
    )
}