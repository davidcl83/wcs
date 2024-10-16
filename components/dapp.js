import { useState } from "react";
import PropTypes from "prop-types";

import AppModal from "./layouts/modal";
import WalletConnectModal from "./connect";

const Dapp = ({ name, src, type }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal((state) => !state);

  const connectModal = () => {
    return (
      <AppModal open={openModal} closeModal={setOpenModal}>
        <WalletConnectModal closeModal={toggleModal} name={name} src={src} />
      </AppModal>
    );
  };

  return (
    <>
      {connectModal()}
      <div
        onClick={setOpenModal}
        className="pageStyles__SApp-sc-1navawn-5 cmAzHq"
      >
        <div
          className={`pageStyles__SAppIcon-sc-1navawn-6${
            type == "dapp" ? " kSIOSl" : " lfUBtr"
          }`}
        >
          <img className="img_icons" src={src} alt={name} />
        </div>
        <div className="pageStyles__SAppName-sc-1navawn-7 eodRCW">{name}</div>
      </div>
    </>
  );
};

Dapp.defaultProps = {
  type: "dapp",
};

Dapp.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Dapp;
