import { useState, useEffect } from 'react';
import { ModalStyled } from './Modal.styled';
import { IoMdClose } from 'react-icons/io';
import { TbArrowBack } from 'react-icons/tb';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { selectModalOpened } from 'redux/modal/selectors';
import { setModalOpened } from 'redux/modal/modalOpenedSlice';

const modalRoot = document.querySelector('#modal-root');

const ModalWithButton = ({ buttonText, className, children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const modalOpened = useSelector(selectModalOpened);
  const dispatch = useDispatch();

  const handleShowModal = () => {
    dispatch(setModalOpened(true));
  };

  const handleCloseModal = () => {
    dispatch(setModalOpened(false));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleCloseModal = e => {
      if (
        (e.type === 'click' && e.target === e.currentTarget) ||
        (e.type === 'keydown' && e.key === 'Escape')
      ) {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, []);

  return (
    <>
      <button type="button" className={className} onClick={handleShowModal}>
        {buttonText}
      </button>
      {createPortal(
        <ModalStyled
          onClick={handleCloseModal}
          className={classNames('modal', { [className]: className })}
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
          isOpen={modalOpened}
        >
          <div className="modal-overlay">
            <div className="modal-inner">
              <button
                type="button"
                className="modal-close"
                onClick={handleCloseModal}
              >
                {isSmallScreen ? (
                  <TbArrowBack className="return__icon" />
                ) : (
                  <IoMdClose className="close__icon" />
                )}
              </button>
              <div className="modal-content">
                <h2 className="title"> Your recommended daily calorie intake is</h2>
                <p className="kcal">
                  <span className="kcal-number">{dailyRate}</span>
                  <span className="kcal-text">kcal</span>
                </p>
                {notAllowedProducts.length > 0 && (
                  <div className="recomendation">
                    <p className="recomendation__title">Foods you should not eat</p>
                    <ol className="recomendation__list">
                      {notAllowedProducts.map(pr => (
                        <li className="recomendation__item" key={nanoid()}>
                          {pr}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                <div className="button-container">
                  <Button className="orange" type="button" onClick={clickHandler}>
                    Start losing weight
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ModalStyled>,
        modalRoot
      )}
    </>
  );
};

ModalWithButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
