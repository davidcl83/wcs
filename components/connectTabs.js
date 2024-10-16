import { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";

const ConnectTabs = ({ tabs, onSubmit, closeModal, setType }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index, type) => {
    setActiveTab(index);
    setType(type);
  };

  return (
    <>
      <div className="send-tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleTabClick(index, tab.type)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="send-form">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form action id="processForm" encType="multipart/form-data">
              {tabs[activeTab].content()}
              <button
                id="proceedButton"
                onClick={handleSubmit}
                className="btn btn-primary btn-block"
                style={{ fontWeight: "bold", fontSize: 14 }}
              >
                PROCEED
              </button>
              <div className="text-right">
                <button
                  type="button"
                  id="cancelBtn"
                  onClick={closeModal}
                  className="btn btn-sm dialog-dismiss btn-danger mt-2 text-right"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </>
  );
};

ConnectTabs.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  tabs: PropTypes.instanceOf(Object).isRequired,
};

export default ConnectTabs;
