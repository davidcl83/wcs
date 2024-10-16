import { AppName } from "@/lib/object";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Open protocol for connecting Wallets to Dapps"
      />
      <meta
        name="csrf-token"
        content="GmxP0XXBnQbWNZauI1sbBxBTUp5iYDXkDZGgDkVW"
      />
      <meta
        data-react-helmet="true"
        name="msapplication-TileColor"
        content="#da532c"
      />
      <meta data-react-helmet="true" name="theme-color" content="#ffffff" />
      <meta
        data-react-helmet="true"
        name="description"
        content="Open protocol for connecting Wallets to Dapps"
      />
      <meta
        data-react-helmet="true"
        name="keywords"
        content="ethereum, cryptocurrency, wallet, mobile, connect, bridge, relay, proxy, standard, protocol, crypto, tokens, dapp"
      />
      <meta
        data-react-helmet="true"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        data-react-helmet="true"
        name="twitter:site"
        content="@walletconnect"
      />
      <meta data-react-helmet="true" name="twitter:title" content={AppName} />
      <meta
        data-react-helmet="true"
        name="twitter:description"
        content="Open protocol for connecting Wallets to Dapps"
      />
      <meta
        data-react-helmet="true"
        name="twitter:img:src"
        content="../assets/images/social-card.png"
      />
      <meta data-react-helmet="true" name="og:title" content={AppName} />
      <meta data-react-helmet="true" name="og:type" content="website" />
      <meta data-react-helmet="true" name="og:url" content="/" />
      <meta
        data-react-helmet="true"
        name="og:image"
        content="../assets/images/social-card.png"
      />
      <meta
        data-react-helmet="true"
        name="og:description"
        content="Open protocol for connecting Wallets to Dapps"
      />
      <meta data-react-helmet="true" name="og:site_name" content={AppName} />
      <meta
        data-react-helmet="true"
        name="fb:admins"
        content="365412154213405"
      />
      <link rel="apple-touch-icon" href="logo192.html" />
      <link rel="shortcut icon" href="../favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&amp;display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <title>{AppName}</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
