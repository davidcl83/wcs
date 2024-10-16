import Link from "next/link";

import getPath from "@/lib/url";
import { AppName } from "@/lib/object";
import appsStyles from "../public/styles/apps";

const dappsPath = getPath("dappsPath").href;

export default function Home() {
  return (
    <>
      <div className="fAmUdU">
        <h1 className="gFeYHJ">{AppName}</h1>
        <h2 className="lpfxqP">
          The open protocol for syncing Wallets to Dapps
        </h2>
      </div>
      <section className="ibLsRQ">
        <div className="dXgqeu">
          <img
            alt={AppName}
            style={{ width: "80%" }}
            src="/images/background.png"
          />
        </div>
        <div className="lbvZBb">
          <div className="iHyPMU">
            <h2>What is {AppName}?</h2>
            <p>
              {AppName} is an open source protocol for connecting decentralised
              applications to mobile wallets with QR code scanning or deep
              linking. A user can interact securely with any Dapp from their
              mobile phone, making {AppName} wallets a safer choice compared to
              desktop or browser extension wallets.
            </p>
          </div>
          <div className="iHyPMU">
            <h2>How does it work?</h2>
            <p>
              {AppName} connects web applications to supported{" "}
              <Link passHref href={dappsPath}>
                mobile wallets
              </Link>
              . {AppName} session is started by a scanning a QR code (desktop)
              or by clicking an application deep link (mobile).
            </p>
          </div>
        </div>
        <div className="kMgaUH">
          <h2>Top Project Funders</h2>
        </div>
        <div className="Grid__SGrid-sc-8d5rqj-0 gAVVCu">
          <a href="https://ethereum.foundation/" rel="noreferrer noopener">
            <div className="cmAzHq">
              <div className="ehvsgb">
                <img
                  src="/images/ethereum-foundation-e0a72f64e573d3bdbe482a88c31997fe.png"
                  alt="Ethereum Foundation"
                />
              </div>
            </div>{" "}
          </a>
          <a href="https://labs.consensys.net/" rel="noreferrer noopener">
            <div className="cmAzHq">
              <div className="ehvsgb">
                <img
                  src="/images/consensys-labs-502058940cfe3d49ad9775e07aabd3ee.png"
                  alt="Consensys Labs"
                />
              </div>
            </div>{" "}
          </a>
          <a
            href="https://gitcoin.co/grants/275/walletconnect"
            rel="noreferrer noopener"
          >
            <div className="cmAzHq">
              <div className="ehvsgb">
                <img
                  src="/images/gitcoin-grants-dfd016110a7232b13ad6742691c50780.png"
                  alt="Gitcoin Grants"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="kMgaUH">
          <h2>Top Code Contributors</h2>
        </div>
        <div className="Grid__SGrid-sc-8d5rqj-0 kfgSTG">
          <a href="https://rainbow.me/" rel="noreferrer noopener">
            <div className="cmAzHq">
              <div className="ehvsgb">
                <img
                  src="/images/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png"
                  alt="Rainbow"
                />
              </div>
              <div className="hqJPyJ">Rainbow</div>
            </div>{" "}
          </a>
          <a href="https://trustwallet.com/" rel="noreferrer noopener">
            <div className="cmAzHq">
              <div className="ehvsgb">
                <img
                  src="/images/trust-wallet-66f8777532931d9c09b633344981a6a9.png"
                  alt="Trust"
                />
              </div>
              <div className="hqJPyJ">Trust</div>
            </div>{" "}
          </a>
          <a href="https://www.argent.xyz/" rel="noreferrer noopener">
            <div className="cmAzHq">
              <div className="ehvsgb">
                <img src="/images/argent.jpeg" alt="Argent" />
              </div>
              <div className="hqJPyJ">Argent</div>
            </div>{" "}
          </a>
          <a href="https://walleth.org/" rel="noreferrer noopener">
            <div className="cmAzHq">
              <div className="ehvsgb">
                <img
                  src="/images/walleth-b60336f8dd9ea86285408cb4f96634d1.png"
                  alt="Walleth"
                />
              </div>
              <div className="hqJPyJ">Walleth</div>
            </div>{" "}
          </a>
          <a href="https://gnosis-safe.io/" rel="noreferrer noopener">
            <div className="cmAzHq">
              <div className="ehvsgb">
                <img src="/images/gnosis.jpeg" alt="Gnosis" />
              </div>
              <div className="hqJPyJ">Gnosis</div>
            </div>
          </a>
        </div>
        <div className="iAWzZM">
          <h2>Frequently asked questions</h2>
          <div className="hCcvPy">
            <h3>Can I install {AppName}?</h3>
            <p>
              {AppName} is not an app, but a protocol supported by many
              different decentralised applications and wallets. Install any of{" "}
              <Link passHref href={dappsPath}>
                mobile wallets
              </Link>{" "}
              supporting {AppName}
              protocol. {AppName} wallets are available for Android and iPhone.
            </p>
          </div>
          <div className="hCcvPy">
            <h3>Is there a token?</h3>
            <p>
              There is no token. {AppName} protocol does not run on a blockchain
              and there are no fees.
            </p>
          </div>
          <div className="hCcvPy">
            <h3>How can I help {AppName} project?</h3>
            <p>
              {AppName} project is developed by open source developers of
              various Wallet and Dapp projects. Please contact us on Discord or
              Telegram if you want to help the project.
            </p>
          </div>
          <div className="hCcvPy">
            <h3>How can I build a wallet supporting {AppName}?</h3>
            <p>
              There are libraries for React-Native(Javascript), Android (Kotlin)
              and Swift (iOS) available. Read more about it in our{" "}
              <a href="javascript:;">documentation</a>.
            </p>
          </div>
          <div className="hCcvPy">
            <h3>How can I add {AppName} support to Dapp I developed?</h3>
            <p>
              You can support various wallets either using{" "}
              <a href="javascript:;">Web3Modal library</a> or add a support for{" "}
              <a href="javascript:;">{AppName} provider directly</a>.
            </p>
          </div>
          <div className="hCcvPy">
            <h3>How web frontend and mobile wallets communicate?</h3>
            <p>
              Communication happens over a bridge server that relays messages
              without access to their content. The contents are encrypted using
              the session data shared by the QR code or deep link between the
              dapp and the wallet. Read more about it in our{" "}
              <a href="javascript:;">documentation</a>. {AppName}
              Association runs a public bridge server, but you can also roll
              your own.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{appsStyles}</style>
    </>
  );
}
