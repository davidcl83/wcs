const pathsByName = {
  homePath: { href: "/", route: "" },
  appsPath: { href: "/apps", route: "" },
  dappsPath: { href: "/dapps", route: "" },
};

const getPath = (pathName, params = {}) => {
  const { href, route } = pathsByName[pathName];

  let as = href;
  let apiRoute = route;

  const data = { href, as };
  if (apiRoute) data.route = apiRoute;
  return data;
};

export default getPath;
