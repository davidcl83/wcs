import css from "styled-jsx/css";

export default css.global`
  /* sc-component-id: Header__SHeader-cphy8j-0 */
  .kyUqCt {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 145px;
    padding: 0 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-around;
  }

  @media screen and (max-width: 640px) {
    .kyUqCt {
      height: 100px;
      padding: 0 15px;
    }
  }

  /* sc-component-id: Header__SInternalLink-cphy8j-1 */
  .guKAph {
    width: 100px;
    text-align: center;
    font-size: 20px;
    color: rgb(88, 120, 188);
    font-weight: 500;
  }

  @media screen and (max-width: 640px) {
    .guKAph {
      width: 60px;
      font-size: 16px;
    }
  }

  /* sc-component-id: Header__SInternalLink-cphy8j-1-a */
  .eyaBAy {
    width: 100px;
    text-align: center;
    font-size: 20px;
    color: rgb(88, 120, 188);
    font-weight: 500;
  }

  @media screen and (max-width: 640px) {
    .eyaBAy {
      width: 60px;
      font-size: 16px;
    }
  }

  /* sc-component-id: Header__SLogo-cphy8j-2 */
  .hnlESl {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0 20px;
    text-align: center;
  }

  .hnlESl img {
    width: 100%;
    max-width: 120px;
    min-width: 60px;
  }

  /* sc-component-id: Footer__SFooter-sc-1k47aoh-0 */
  .jVWwwJ {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 160px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  @media screen and (max-width: 640px) {
    .jVWwwJ {
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      height: auto;
      margin: 30px 0;
    }

    .jVWwwJ a {
      margin: 10px 0;
    }
  }

  /* sc-component-id: Footer__SSocialIcon-sc-1k47aoh-1 */
  .hvbAKM {
    width: 20px;
    height: 20px;
  }

  .hvbAKM img {
    height: 100%;
  }

  /* sc-component-id: Footer__SExternalLink-sc-1k47aoh-2 */
  .YwSGw {
    width: 150px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .YwSGw p {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 0.5em;
    font-size: 14px;
    color: rgb(88, 120, 188);
    font-weight: 500;
  }

  /* sc-component-id: sc-global-3954063800 */

  html,
  body,
  #root,
  #router-root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "SF Pro Text",
      Roboto, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-stretch: normal;
    font-weight: 400;
    font-size: 16px;
    color: rgb(88, 112, 135);
    overflow-y: auto;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -webkit-overflow-scrolling: touch;
  }

  button:active,
  button:focus,
  button.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  [tabindex] {
    outline: none;
    height: 100%;
  }

  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    -webkit-text-decoration: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }

  h5 {
    font-size: 17px;
  }

  h6 {
    font-size: 14px;
  }

  a {
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    outline: none;
    color: #5c6fea;
    font-weight: bold;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box !important;
  }

  button {
    border-style: none;
    line-height: 1em;
  }

  input {
    -webkit-appearance: none;
  }

  input[type="color"],
  input[type="date"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="email"],
  input[type="month"],
  input[type="number"],
  input[type="password"],
  input[type="search"],
  input[type="tel"],
  input[type="text"],
  input[type="time"],
  input[type="url"],
  input[type="week"],
  select:focus,
  textarea {
    font-size: 16px;
  }

  .statusbar-overlay {
    opacity: 0;
  }

  #coinbase_button_iframe {
    width: 244px !important;
    margin-top: 40px !important;
  }

  #coinbase_widget {
    display: inline-block;
    margin-top: 56px !important;
  }

  /* sc-component-id: layout__SWrapper-wjwiqk-0 */
  .dijnUu {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
  }

  /* sc-component-id: layout__SContent-wjwiqk-1 */
  .fiuMUO {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }

  /* sc-component-id: layout__SContainer-wjwiqk-2 */
  .fuQfHo {
    height: 100%;
    max-width: 1064px;
    margin: 0 auto;
    padding: 0;
  }

  /* sc-component-id: layout__SFlex-wjwiqk-3 */
  .hfVnjX {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
  }

  @media screen and (max-width: 640px) {
    .hfVnjX {
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }

  /* sc-component-id: Grid__SGrid-sc-8d5rqj-0 */
  .gAVVCu {
    width: 100%;
    /*height: 100%;*/
    padding: 24px;
    overflow-x: hidden;
    overflow-y: hidden;
    background: rgb(255, 255, 255);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }

  @media screen and (max-width: 640px) {
    .gAVVCu {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-column-gap: 15px;
      grid-row-gap: 15px;
    }
  }

  .kfgSTG {
    width: 100%;
    /*height: 100%;*/
    padding: 24px;
    overflow-x: hidden;
    overflow-y: hidden;
    background: rgb(255, 255, 255);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }

  @media screen and (max-width: 640px) {
    .kfgSTG {
      grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
      grid-column-gap: 15px;
      grid-row-gap: 15px;
    }
  }

  /* sc-component-id: pageStyles__SIndexPage-sc-1navawn-0 */
  .hDbjSS {
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-around;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    padding: 0 32px;
    padding-top: 30px;
  }

  @media screen and (max-width: 640px) {
    .hDbjSS {
      padding: 0 24px;
      padding-top: 20px;
    }
  }

  /* sc-component-id: pageStyles__SBrandingWrapper-sc-1navawn-1 */
  .fAmUdU {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }

  /* sc-component-id: pageStyles__SBranding-sc-1navawn-2 */
  .gFeYHJ {
    font-size: 35px;
    font-weight: 500;
    text-align: center;
  }

  /* sc-component-id: pageStyles__SSection-sc-1navawn-4 */
  .ibLsRQ {
    position: relative;
    width: 100%;
    z-index: 0;
    margin-bottom: 40px;
  }

  /* sc-component-id: pageStyles__SApp-sc-1navawn-5 */
  .cmAzHq {
    width: 100%;
  }

  /* sc-component-id: pageStyles__SAppIcon-sc-1navawn-6 */
  .ehvsgb {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 25px;
  }

  .ehvsgb img {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    width: 100%;
    height: 100%;
    border-radius: initial;
  }

  /* sc-component-id: pageStyles__SAppName-sc-1navawn-7 */
  .hqJPyJ {
    font-weight: bold;
    color: rgb(46, 67, 88);
  }

  /* sc-component-id: pages__STagline-sc-6zti4a-0 */
  .lpfxqP {
    margin: 30px 0;
    font-size: 30px;
    font-weight: 300;
    text-align: center;
  }

  /* sc-component-id: pages__SBannerWrapper-sc-6zti4a-1 */
  .dXgqeu {
    width: 100%;
    max-width: 1000px;
    margin: 30px auto;
  }

  .dXgqeu img {
    width: 100%;
  }

  /* sc-component-id: pages__SDescriptionWrapper-sc-6zti4a-2 */
  .lbvZBb {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 30px -32px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  @media screen and (max-width: 640px) {
    .lbvZBb {
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }

  .lbvZBb h2 {
    font-size: 32px;
    font-weight: 300;
    color: rgb(46, 67, 88);
    margin-bottom: 20px;
  }

  /* sc-component-id: pages__SColumn-sc-6zti4a-3 */
  .iHyPMU {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 32px;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.35;
  }

  /* sc-component-id: pages__SSectionTitle-sc-6zti4a-4 */
  .kMgaUH {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-top: 30px;
    text-align: center;
  }

  .kMgaUH h2 {
    font-size: 32px;
    font-weight: 300;
    color: rgb(46, 67, 88);
  }

  /* sc-component-id: pages__SFAQWrapper-sc-6zti4a-5 */
  .iAWzZM {
    display: block;
    max-width: 600px;
    margin: 0 auto;
  }

  .iAWzZM h2 {
    font-size: 32px;
    font-weight: 300;
    color: rgb(46, 67, 88);
    margin-top: 40px;
    margin-bottom: 20px;
  }

  /* sc-component-id: pages__SQuestion-sc-6zti4a-6 */
  .hCcvPy {
    display: block;
    margin-top: 30px;
    text-align: left;
  }

  .hCcvPy h3 {
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 300;
    color: rgb(46, 67, 88);
    margin-bottom: 20px;
  }

  .hCcvPy p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.35;
  }
`;
