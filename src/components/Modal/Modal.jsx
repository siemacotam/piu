import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const Modal = ({children, handleOnClose, isOpen, shouldBeClouseOnOutsideClick}) => {
    const modalRef = useRef(null);
    const previousActiveElement = useRef(null);

    useEffect(() => {
        if(!modalRef.current) {
            return;
        }

        const {current: modal} = modalRef;

        if(isOpen) {
            previousActiveElement.current = document.activeElement;
            modal.showModal();
        } else if (previousActiveElement.current) {
            modal.close();
            previousActiveElement.current.focus();
        }
    }, [isOpen]);

    useEffect(()=>{
        const { current: modal} = modalRef;

        const handleCancel = event => {
            event.preventDefalut();
            handleOnClose();
        }

        modal.addEventListener('cancel', handleCancel);

        return() => {
            modal.removeEventListener('cancel', handleCancel);
        }

    }, [handleOnClose]);

    const handleOutsideClick = ({ target }) => {
        const { current } = modalRef;


        if (shouldBeClouseOnOutsideClick && target === current) {
            handleOnClose();
        }
    }

    return ReactDOM.createPortal(( 
        <dialog className='modal' ref={modalRef} onClick={handleOutsideClick}>
            {children}
        </dialog>
     ), document.body );
};
 
export default Modal;
