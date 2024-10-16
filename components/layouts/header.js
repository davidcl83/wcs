import Link from "next/link";

import getPath from "../../lib/url";

const homePath = getPath("homePath").href;
const appsPath = getPath("appsPath").href;
const dappsPath = getPath("dappsPath").href;

const NavHeader = () => {
  return (
    <>
      <header className="header">
        <a className="nav_link" href="#">
          Github
        </a>
        <a className="nav_link" href="#">
          Docs
        </a>
        <div className="nav_logo">
          <Link passHref href={homePath}>
            <img src="/images/logo.png" alt="RectifySync" />
          </Link>
        </div>

        <Link passHref href={appsPath} className="nav_link">
          Apps
        </Link>

        <Link passHref href={dappsPath} className="nav_link">
          Dapps
        </Link>
      </header>
    </>
  );
};

export default NavHeader;
