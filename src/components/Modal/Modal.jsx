import { ModalStyled } from './Modal.styled';
import { IoMdClose } from 'react-icons/io';
import { TbArrowBack } from 'react-icons/tb';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { selectModalOpened } from 'redux/selectors';
import { setModalOpened } from 'redux/modalOpenedSlice';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, className, onClose }) => {
    const dispatch = useDispatch();
    const modalOpened = useSelector(selectModalOpened);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 767);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleCloseModal = (e) => {
            if (
                (e.type === 'click' && e.target === e.currentTarget) ||
                (e.type === 'keydown' && e.key === 'Escape')
            ) {
                dispatch(setModalOpened(false));
                if (onClose) onClose();
            }
        };

        window.addEventListener('keydown', handleCloseModal);

        return () => {
            window.removeEventListener('keydown', handleCloseModal);
        };
    }, [dispatch, onClose]);

    const handleCloseModal = () => {
        dispatch(setModalOpened(false));
        if (onClose) onClose();
    };

    return createPortal(
        <ModalStyled
            onClick={handleCloseModal}
            className={classNames('modal', { [className]: className })}
            aria-modal="true"
            role="dialog"
            tabIndex="-1"
        >
            <div className="modal-overlay">
                <div className="modal-inner">
                    <button type="button" className="modal-close" onClick={handleCloseModal}>
                        {isSmallScreen ? (
                            <TbArrowBack className="return__icon" />
                        ) : (
                            <IoMdClose className="close__icon" />
                        )}
                    </button>
                    <div className="modal-content">{children}</div>
                </div>
            </div>
        </ModalStyled>,
        modalRoot
    );
};

Modal.propTypes = {
children: PropTypes.node.isRequired,
className: PropTypes.string,
onClose: PropTypes.func,
};

export default Modal;