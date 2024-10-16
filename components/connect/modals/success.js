import { useEffect } from "react";
import PropTypes from "prop-types";

const Success = ({ closeModal }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 2500);

    return () => clearTimeout(timer);
  }, [closeModal]);

  return (
    <div
      id="success-dialog"
      className="message-dialog"
      style={{ color: "#587087", textAlign: "center" }}
    >
      <div className="send-dialog-overlay" />
      <div className="send-dialog-content">
        <div className="connect-dialog-body">
          <img alt="Success" style={{ width: 100 }} src="/images/success.gif" />
          <h4 className="mt-3">Connection Successful</h4>
        </div>
      </div>
    </div>
  );
};

Success.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Success;
