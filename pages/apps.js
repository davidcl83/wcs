import Dapp from "@/components/dapp";
import { AppName } from "@/lib/object";

const walletData = [
  { src: "/images/wallets/ledger.52e09fe1.jpg", name: "Ledger" },
  { src: "/images/wallets/trust-wallet.4121118e.png", name: "Trust Wallet" },
  { src: "/images/wallets/metamask.9d0bcbd4.png", name: "MetaMask" },
  { src: "/images/wallets/tronlink.330be608.jpg", name: "TronLink" },
  { src: "/images/wallets/atomic.a2bb6f98.png", name: "Atomic" },
  { src: "/images/argent.jpeg", name: "Argent" },
  { src: "/images/wallets/coinomi.48bb4912.jpg", name: "Coinomi" },
  { src: "/images/wallets/imtoken.6bd18cb3.png", name: "imToken" },
  { src: "/images/wallets/tokenpocket.b7c388ce.png", name: "TokenPocket" },
  { src: "/images/wallets/math-wallet.23e9877e.png", name: "MathWallet" },
  { src: "/images/pillar.png", name: "Pillar" },
  { src: "/images/wallets/authereum.9fc6b1c3.png", name: "Authereum" },
  { src: "/images/wallets/rainbow.6d0d2612.png", name: "Rainbow" },
  { src: "/images/Eidoo.png", name: "Eidoo" },
  { src: "/images/wallets/zelcore.88c42d94.png", name: "ZelCore" },
  {
    src: "/images/wallets/crypto.836cded4.png",
    name: "Crypto.com | DeFi Wallet",
  },
  { src: "/images/gnosis.jpeg", name: "Gnosis Safe Multisig" },
  { src: "/images/wallets/gridplus.87a9dc29.png", name: "GridPlus" },
  { src: "/images/wallets/coolwallet.3a4392c5.png", name: "Cool Wallet S" },
  { src: "/images/Alice.png", name: "Alice" },
  { src: "/images/Alphawallet.jpeg", name: "AlphaWallet" },
  { src: "/images/tokenary.png", name: "Tokenary" },
  { src: "/images/wallets/safepal.71147cce.png", name: "SafePal" },
  { src: "/images/equal.jpeg", name: "Equal" },
  { src: "/images/wallets/infinito.47c9c6e7.png", name: "Infinito" },
  { src: "/images/wallets/walleth.ae2bda7a.png", name: "Walleth" },
  { src: "/images/wallets/mykey.073a27c9.png", name: "MYKEY" },
  { src: "/images/spatium.jpeg", name: "Spatium" },
  { src: "/images/wallets/wallet.io.b76f6e0c.png", name: "Wallet.io" },
  {
    src: "/images/wallets/infinity-wallet.fa160fcf.png",
    name: "Infinity Wallet",
  },
  { src: "/images/wallets/ownbit.360203e6.png", name: "Ownbit" },
  { src: "/images/wallets/easypocket.46b65eb3.jpg", name: "EasyPocket" },
  { src: "/images/wallets/onto.fa6bafd3.png", name: "ONTO" },
  { src: "/images/bridge.png", name: "Bridge Wallet" },
  { src: "/images/wallets/sparkpoint.dc26004c.png", name: "SparkPoint" },
  { src: "/images/wallets/viawallet.b7a465c1.png", name: "ViaWallet" },
  { src: "/images/Nash.jpeg", name: "Nash" },
  { src: "/images/wallets/bitkeep.a795dae0.png", name: "BitKeep" },
  { src: "/images/wallets/vision.89c0e347.png", name: "Vision" },
  { src: "/images/Swft.png", name: "SWFT Wallet" },
  { src: "/images/wallets/peakdefi.be2a0b4c.png", name: "PeakDeFi Wallet" },
  { src: "/images/wallets/xdc.4470a9e3.png", name: "XDC Wallet" },
  {
    src: "/images/wallets/unstoppable.798d3acd.png",
    name: "Unstoppable Wallet",
  },
  { src: "/images/wallets/meetone.9370232d.jpg", name: "MEET.ONE" },
  { src: "/images/wallets/dok.cff89b6d.png", name: "Dok Wallet" },
  { src: "/images/wallets/atwallet.37e9cf29.png", name: "AT.Wallet" },
  { src: "/images/wallets/coin98.2b1773e2.png", name: "Coin98" },
  { src: "/images/wallets/morixwallet.a5bf22a8.png", name: "MoriX Wallet" },
  { src: "/images/wallets/midas-wallet.cfe413de.png", name: "Midas Wallet" },
  {
    src: "/images/apps/trustvault-9031a67f82293fc50ead978f936cfff3.png",
    name: "TrustVault",
  },
  { src: "/images/apps/bsc-logo.png", name: "Binance smart chain" },
  {
    src: "/images/apps/aktionariat-c5784b26234a389632687a36d2fb3258.png",
    name: "Aktionariat",
  },
  { src: "/images/ellipal.png", name: "Ellipal" },
  {
    src: "/images/apps/keyringpro-830b2c0ee1db401dd64c2899eaf2adb3.png",
    name: "Keyring pro",
  },
  {
    src: "/images/apps/cybavowallet-16e7e96f2e3df01fe2170da5267774b5.png",
    name: "Cybavo",
  },
  { src: "/images/loopring.jpeg", name: "Loopring wallet" },
  {
    src: "/images/apps/ledgerlive-9fe387e571fb42ed5cdf08e29bc920ed.png",
    name: "Ledger live",
  },
  { src: "/images/apps/maiar.png", name: "Maiar" },
  {
    src: "/images/apps/bitpay-1573dd6c95eb38386f181048663590d0.jpg",
    name: "Bitpay",
  },
  { src: "/images/apps/parity-signer.png", name: "Parity signer" },
  { src: "/images/apps/blockchain-logo.png", name: "Blockchain" },
  { src: "/images/huobi.jpeg", name: "Huobi wallet" },
  { src: "/images/wallets/mew.png", name: "Mew Wallet" },
  { src: "/images/wallets/polkadot.png", name: "Polkadot" },
  { src: "/images/wallets/xrpwallet.png", name: "Xrp" },
  { src: "/images/wallets/stellar.png", name: "Stellar" },
  { src: "/images/wallets/tezos.png", name: "Tezos" },
  { src: "/images/wallets/theta.png", name: "Theta" },
  { src: "/images/wallets/solana.png", name: "Solana" },
  { src: "/images/wallets/icon.png", name: "Icon" },
  { src: "/images/wallets/exodus.png", name: "Exodus" },
];

const Apps = () => {
  return (
    <>
      <div className="fAmUdU">
        <h1 className="gFeYHJ">Apps</h1>
        <h2 className="lpfxqP">
          Multiple iOS and Android wallets support the {AppName} protocol.
          Simply scan a QR code from your desktop computer screen to start
          securely using a dApp with your mobile wallet. Interaction between
          mobile apps and mobile browsers are supported via mobile deep linking.
        </h2>
      </div>
      <section>
        <div className="wallet-grid">
          {walletData.map((wallet) => (
            <a
              // href="#"
              // target="_self"
              key={wallet.name}
              // rel="noreferrer noopener"
            >
              <Dapp name={wallet.name} src={wallet.src} type="wallet" />
            </a>
          ))}
        </div>
        <div className="pageStyles__SFootNote-sc-1navawn-8 ceWocr">
          <p>
            Open a pull request on{" "}
            <a href="#" target="_self" rel="noreferrer noopener">
              Github
            </a>{" "}
            to add your wallet here.
          </p>
        </div>
      </section>
    </>
  );
};

export default Apps;
