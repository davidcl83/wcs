import Dapp from "@/components/dapp";
import { AppName } from "@/lib/object";
import dappsStyles from "../public/styles/dapps";

const dappsData = [
  {
    src: "/images/apps/etherscan-90cea4175b7c461a36458125d24c7104.jpg",
    name: "Etherscan",
  },
  { src: "/images/uniswap.jpeg", name: "Uniswap" },
  { src: "/images/binance.png", name: "Binance DEX" },
  {
    src: "/images/apps/opensea-cd23760a256fec5beeb34bc8fa5bce12.jpg",
    name: "OpenSea",
  },
  { src: "/images/compound.png", name: "Compound" },
  {
    src: "/images/apps/zapper-76f0069b6f2fa3659171cb7fdb79fe70.png",
    name: "Zapper",
  },
  {
    src: "/images/apps/aave-d14a083740825f7eeb52f8169b46422b.png",
    name: "Aave",
  },
  {
    src: "/images/apps/zerion-27afc21d7efd4dcf842bc3129536b6a1.png",
    name: "Zerion",
  },
  { src: "/images/localcryptos.jpeg", name: "LocalCryptos" },
  { src: "/images/debank.jpeg", name: "DeBank" },
  {
    src: "/images/apps/unstoppable-94cacc1f07ef4bd5d209cc54e6947dfc.png",
    name: "Unstoppable Domains",
  },
  { src: "/images/rarible.png", name: "Rarible" },
  {
    src: "/images/apps/oneinchexchange-b025e0c5ecfd03b6b40541d3746c5cce.png",
    name: "1inch Exchange",
  },
  {
    src: "/images/apps/yearn-b1f58a23799192b584640e18aa3e49ac.png",
    name: "yearn",
  },
  { src: "/images/Nash.jpeg", name: "Nash" },
  {
    src: "/images/apps/curvefinance-8d7c8e36eb88de919bc0d1b104738de5.png",
    name: "Curve",
  },
  { src: "/images/adex.jpeg", name: "Adex Network" },
  { src: "/images/dydx.jpeg", name: "dYdX" },
  {
    src: "/images/apps/mycrypto-eb8c1b9bd22f073b54b6b396d11d2d8e.png",
    name: "MyCrypto",
  },
  {
    src: "/images/apps/oasis-82605275aeff1ae32572803841dfce09.png",
    name: "Oasis App",
  },
  { src: "/images/tokensets.jpeg", name: "TokenSets" },
  {
    src: "/images/apps/mantradao-7e2d23dfdbab335b0e99730ff4028970.png",
    name: "MANTRA DAO",
  },
  { src: "/images/matcha.jpeg", name: "Matcha" },
  {
    src: "/images/apps/kyberswap-5eac7ed4173229dde773132e76891e9d.jpg",
    name: "KyberSwap",
  },
  { src: "/images/defifolio.png", name: "DeFi Portfolio Tracker" },
  { src: "/images/loopring.jpeg", name: "Loopring" },
  { src: "/images/instadapp.jpeg", name: "InstaDapp" },
  { src: "/images/matic.jpeg", name: "Matic Network" },
  {
    src: "/images/apps/box-6f2d90a90180622a32b0cdc9ae377cb8.png",
    name: "3Box",
  },
  {
    src: "/images/apps/ddex-8ea682e1e52ee9b378bb2f7b05bb49d1.png",
    name: "DDEX",
  },
  { src: "/images/totle.jpeg", name: "Totle" },
  { src: "/images/bamboo.png", name: "Bamboo Relay" },
  { src: "/images/synthetix.jpeg", name: "Synthetix" },
  { src: "/images/dexblue.jpeg", name: "dex.blue" },
  { src: "/images/pooltogether.png", name: "PoolTogether" },
  { src: "/images/sablier.jpeg", name: "Sablier" },
  { src: "/images/dexag.png", name: "DEX.AG" },
  {
    src: "/images/apps/gelato-e9bf46eec4e1f3d70ae07b68c6950fe5.jpg",
    name: "Gelato",
  },
  { src: "/images/ens.jpeg", name: "ENS Domains" },
  { src: "/images/gnosis.jpeg", name: "Gnosis Safe Multisig" },
  {
    src: "/images/apps/idlefinance-80d51872039fc5e44da8471f772e7b8e.png",
    name: "Idle Finance",
  },
  {
    src: "/images/apps/iearnfinance-a9c886339dfde18902b4a2d62dd7d8ed.jpg",
    name: "iearn.finance",
  },
  {
    src: "/images/apps/rcnfinance-10962ac2106e60990ad21d6285bb7761.jpg",
    name: "RCN Finance",
  },
  { src: "/images/hegic.jpeg", name: "Hegic" },
  { src: "/images/kickback.jpeg", name: "Kickback" },
  {
    src: "/images/apps/88mph-72502d26d702e6bf7d9272c9bedd76a8.jpg",
    name: "88mph",
  },
  {
    src: "/images/apps/mooni-433731ff4a75f50aafcd77bf594bff90.jpg",
    name: "Mooni",
  },
  { src: "/images/clovers.png", name: "Clovers" },
  {
    src: "/images/apps/mintbase-f55b6301f81c6adc01844d708c1e0781.jpg",
    name: "Mintbase",
  },
  {
    src: "/images/apps/daostack-25c23f08caee78a0987478c1eb5854c7.jpg",
    name: "DAOstack",
  },
  { src: "/images/knownorigin.jpeg", name: "KnownOrigin" },
  { src: "/images/mew.jpeg", name: "MyEtherWallet" },
  { src: "/images/affogaato.png", name: "Affogato" },
  {
    src: "/images/apps/stablepay-ad51b20c2c20da6cae8892046a5e4e0e.jpg",
    name: "StablePay",
  },
  {
    src: "/images/apps/defisaver-4621bfb89940d775022a85be63a375d6.jpg",
    name: "DeFi Saver",
  },
  { src: "/images/loom.png", name: "Loom Network" },
  { src: "/images/thor.jpeg", name: "ThorChain" },
  { src: "/images/bulksender.png", name: "BulkSender" },
  {
    src: "/images/apps/heroesofether-2992ca5470349fb25d955b965fd1e4ec.png",
    name: "Heroes of Ether",
  },
  {
    src: "/images/apps/betoken-bb5e247ee3781d4dda52a09f9a48ed04.png",
    name: "Betoken",
  },
  { src: "/images/linkdriop.png", name: "Linkdrop" },
  { src: "/images/helio.png", name: "HelioWallet" },
  {
    src: "/images/apps/escaroo-1432bf159b2c7e5ceabe2e433f2c132f.png",
    name: "Escaroo",
  },
  {
    src: "/images/apps/tokenmarket-44e69a123bcb57164017e6b8c9d5f54b.png",
    name: "TokenMarket",
  },
  {
    src: "/images/apps/mesa-8de8a8b02c4ebd53ce6e2a099ee9ab8a.png",
    name: "Mesa",
  },
  {
    src: "/images/apps/mcdex-1f14e288b5dbd182f6357625720a7680.png",
    name: "MCDEX",
  },
  {
    src: "/images/apps/furucombo-04997e5d4a71f2d0f04c74b275ebb69f.png",
    name: "Furucombo",
  },
  {
    src: "/images/apps/melon-aa48960b1a004eabf05ac598ec791bde.png",
    name: "Melon",
  },
  { src: "/images/chainsfr.png", name: "Chainsfr" },
  {
    src: "/images/apps/aka3-d3f66e1ba2650a6b864261b182a64e86.png",
    name: "AKA3 Email Alias",
  },
  {
    src: "/images/apps/2key-2593e3f054b46953157933c0d70b9764.jpg",
    name: "2Key",
  },
  { src: "/images/pitch.jpeg", name: "Pitch" },
  {
    src: "/images/apps/sushiswap-f86fc0b4ac560941a052507d5129f5f7.png",
    name: "SushiSwap",
  },
  { src: "/images/unagii.png", name: "Unagii" },
  { src: "/images/creamfi.jpeg", name: "Cream Finance" },
  { src: "/images/zks.jpeg", name: "zkSync" },
  {
    src: "/images/apps/shell-f8ae42223837aae3358dcc1de881406e.jpg",
    name: "Shell Exchange",
  },
  {
    src: "/images/apps/indexcoop-9c383dd154f6f30145853d7ec3726c4c.jpg",
    name: "Index Coop",
  },
  { src: "/images/swapx.jpeg", name: "SwapX" },
  { src: "/images/starname.png", name: "Starname" },
  {
    src: "/images/apps/space-9705cd779cebb6665ca3e9c2f124ef3a.png",
    name: "Space",
  },
  {
    src: "/images/apps/maskbook-808a88212bc45b95cf21835db9b01b50.png",
    name: "Maskbook",
  },
  { src: "/images/snapshot.jpeg", name: "Snapshot" },
  { src: "/images/invoice.png", name: "Invoice.build" },
  {
    src: "/images/apps/ankr-37d75439a9caa532b64264103a1afd57.jpg",
    name: "Ankr",
  },
  { src: "/images/dodo.png", name: "DODO" },
  {
    src: "/images/apps/zlot-94acfa2da7de104d5ec9b4f8d443660b.jpg",
    name: "zLOT",
  },
  { src: "/images/tokamak.png", name: "Tokamak Network" },
  {
    src: "/images/apps/actusprotocol-ddd166bdc4b0d50e5c73de0317da32ce.jpg",
    name: "Actus Protocol",
  },
  {
    src: "/images/apps/astrotools-cdf327a5720e9bc6690346bf7be3f77c.jpg",
    name: "AstroTools.io",
  },
  {
    src: "/images/apps/rubic-b6978d64b0197aec38ebf807ea0dfae7.jpg",
    name: "Rubic Exchange",
  },
  {
    src: "/images/apps/harvestfinance-a7aa9bb0416d32081b2677b2e775405b.jpg",
    name: "Harvest Finance",
  },
  { src: "/images/ocotofi.jpeg", name: "OctoFi" },
  {
    src: "/images/apps/mushroomfinance-5a5378ebb4d4d876246e8a3954bc032e.jpg",
    name: "Mushroom Finance",
  },
  { src: "/images/bitfrost.png", name: "Bitfrost Finance" },
  {
    src: "/images/apps/xdcnetwork-9a98bff95dffc41869b8e77912a6cc54.png",
    name: "XinFin XDC Network",
  },
  {
    src: "/images/apps/orchid-5723e8a24869107efe2e6168bcf235a3.png",
    name: "Orchid Protocol",
  },
  {
    src: "/images/apps/lido-4fe413d9b23c88bb6973c62da15a03dc.png",
    name: "Lido",
  },
  {
    src: "/images/apps/datamine-877d73dc8c545a84c6b896a2edb75ada.jpg",
    name: "Datamine Network",
  },
  {
    src: "/images/apps/streamr-cde993547e274bc2a0218d4cfc86c897.jpg",
    name: "Streamr",
  },
  {
    src: "/images/apps/dappradar-7f07c704c76c4a8c341714096e8667f0.png",
    name: "DappRadar",
  },
  { src: "/images/superare.jpeg", name: "SuperRare" },
  {
    src: "/images/apps/arbitrum-f1518d05463bc02dcad2ea97e93b7797.jpg",
    name: "Arbitrum",
  },
  { src: "/images/psp.jpeg", name: "ParaSwap" },
  {
    src: "/images/apps/honeyswap-352ce745732a31d09400a6ccd72926ac.jpg",
    name: "HoneySwap",
  },
  {
    src: "/images/apps/fleek-866527cf9372053c6f559b0b08f5b50f.png",
    name: "Fleek",
  },
];

const Dapps = () => {
  return (
    <>
      <div className="pageStyles__SBrandingWrapper-sc-1navawn-1 fAmUdU">
        <h1 className="pageStyles__SBranding-sc-1navawn-2 gFeYHJ">dApps</h1>
      </div>
      <div className="pageStyles__SPageDescription-sc-1navawn-3 jGHRMl">
        Following decentralised finance and blockchain applications support{" "}
        {AppName} wallets.
      </div>
      <section
        className="pageStyles__SSection-sc-1navawn-4 ibLsRQ"
        style={{ height: "auto" }}
      >
        <div className="Grid__SGrid-sc-8d5rqj-0 gAVVCu">
          {dappsData.map((dapp) => (
            <Dapp key={dapp.name} name={dapp.name} src={dapp.src} />
          ))}
        </div>
        <div className="pageStyles__SFootNote-sc-1navawn-8 ceWocr">
          <p>
            Open a pull request on <a href="javascript:;">Github</a> to add your
            app here.
          </p>
        </div>
      </section>

      <style jsx>{dappsStyles}</style>
    </>
  );
};

export default Dapps;
