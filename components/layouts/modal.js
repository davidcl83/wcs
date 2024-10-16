import PropTypes from "prop-types";
import Modal from "react-responsive-modal";

import { doNothing } from "../../lib/object";

const modalOptions = {
  center: true,
  closeOnEsc: true,
  focusTrapped: false,
  showCloseIcon: false,
  closeOnOverlayClick: true,
};

const AppModal = ({ open, options, modalClass, children, closeModal }) => {
  if (!open) return null;

  const props = {
    ...modalOptions,
    ...options,
    open,
    center: true,
    onClose: closeModal,
    animationDuration: 500,
    classNames: {
      // overlay: "relay-modal-wrapper",
      modal: modalClass || "send-dialog-overlay",
      modalAnimationIn: "customEnterModalAnimation",
      modalAnimationOut: "customLeaveModalAnimation",
      overlayAnimationIn: "customEnterOverlayAnimation",
      overlayAnimationOut: "customLeaveOverlayAnimation",
    },
  };

  return <Modal {...props}>{children}</Modal>;
};

AppModal.defaultProps = {
  open: false,
  options: {},
  modalClass: null,
  closeModal: doNothing,
};

AppModal.propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
  modalClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  options: PropTypes.instanceOf(Object),
};

export default AppModal;
