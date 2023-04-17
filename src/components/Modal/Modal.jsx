const ModalWithButton = ({ buttonText, className, children }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
          isOpen={showModal}
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
              <div className="modal-content">{children}</div>
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

export default ModalWithButton;