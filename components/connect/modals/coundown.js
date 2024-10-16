import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Coundown = ({ setPage }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setPage("success");
    }
  }, [setPage, count]);

  return (
    <div
      id="processing-dialog"
      className="message-dialog"
      style={{ color: "#587087", textAlign: "center" }}
    >
      <div className="send-dialog-overlay" />
      <div className="send-dialog-content">
        <div className="connect-dialog-body">
          <h1 id="processing-val" style={{ fontSize: 45 }}>
            {count}
          </h1>
          <h4 className="mt-3">Processing...</h4>
        </div>
      </div>
    </div>
  );
};

Coundown.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Coundown;
