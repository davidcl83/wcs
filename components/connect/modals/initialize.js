import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Initialize = ({ setPage, dappName, dappImage, closeModal }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoading(false);
    }, 1000);

    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <div id="connect-dialog">
      <div className="content-dialog-overlay" />
      <div className="content-dialog-content">
        <div className="connect-dialog-header">
          <button className="dialog-dismiss" onClick={closeModal}>
            Back
          </button>
          <button className="dialog-dismiss" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="connect-dialog-body">
          {loading ? (
            <div className="connection-info">Initializing...</div>
          ) : (
            <div className="connection-info">
              Error Connecting...{" "}
              <button
                class="manual-connection"
                onClick={() => setPage("connect")}
              >
                Connect Manually
              </button>
            </div>
          )}
          <div className="wallet-app-info">
            <div id="current-wallet-app" className="wallet-app-name">
              {dappName}
            </div>
            <div className="wallet-app-logo">
              <img
                src={dappImage}
                alt="wallet-app-name"
                id="current-wallet-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Initialize.propTypes = {
  setPage: PropTypes.func.isRequired,
  dappName: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  dappImage: PropTypes.string.isRequired,
};

export default Initialize;
