import { useState } from "react";
import PropTypes from "prop-types";

import Success from "./modals/success";
import Coundown from "./modals/coundown";
import Initialize from "./modals/initialize";
import Connect from "./modals/connect";
import Failure from "./modals/failure";

const WalletConnectModal = ({ closeModal, name, src }) => {
  const [page, setPage] = useState("initialize");

  return (
    <>
      {page == "initialize" && (
        <Initialize
          dappImage={src}
          dappName={name}
          setPage={setPage}
          closeModal={closeModal}
        />
      )}
      {page == "connect" && (
        <Connect
          dappImage={src}
          dappName={name}
          setPage={setPage}
          closeModal={closeModal}
        />
      )}
      {page == "success" && <Success closeModal={closeModal} />}
      {page == "countdown" && <Coundown setPage={setPage} />}
      {page == "failure" && <Failure setPage={setPage} />}
    </>
  );
};

WalletConnectModal.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default WalletConnectModal;
