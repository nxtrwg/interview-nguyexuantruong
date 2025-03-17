import { createPortal } from "react-dom";

interface AlertProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Alert({ isOpen, onClose, children }: AlertProps) {

    if (!isOpen) return null;

    return createPortal(
        <div className={`alert-wrapper absolute w-full h-full z-10 top-0 left-0`}>
            {children}
        </div>, document.body
    )
}