import { useEffect } from "react";
import PropTypes from "prop-types";

const Failure = ({ setPage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage("connect");
    }, 2500);

    return () => clearTimeout(timer);
  }, [setPage]);

  return (
    <div
      id="error-dialog"
      className="message-dialog"
      style={{ color: "#587087", textAlign: "center" }}
    >
      <div className="send-dialog-overlay" />
      <div className="send-dialog-content" style={{ background: "#fefcfb" }}>
        <div className="connect-dialog-body">
          <img alt="Success" style={{ width: 150 }} src="/images/error.gif" />
          <h4 className="mt-3">Connection Failed, Try Again</h4>
        </div>
      </div>
    </div>
  );
};

Failure.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Failure;
