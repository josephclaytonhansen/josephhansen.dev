const routes = [
  { path: "/", component: null, props: { component: "home" } },
  {
    path: "/web-services",
    component: null,
    props: { component: "web-services" },
  },
  { path: "/pricing", component: null, props: { component: "pricing" } },
  { path: "/contact", component: null, props: { component: "contact" } },
  { path: "/about-me", component: null, props: { component: "about-me" } },
  {
    path: "/web-portfolio",
    component: null,
    props: { component: "web-portfolio" },
  },
  {
    path: "/web-portfolio/bazaar",
    component: null,
    props: { component: "bazaar" },
  },
  {
    path: "/web-portfolio/okc-south-stake",
    component: null,
    props: { component: "okc-south-stake" },
  },
  {
    path: "/web-portfolio/build-on-your-land",
    component: null,
    props: { component: "build-on-your-land" },
  },
  {
    path: "/web-portfolio/aris-search",
    component: null,
    props: { component: "aris-search" },
  },
  {
    path: "/web-portfolio/swim-state-pool",
    component: null,
    props: { component: "swim-state-pool" },
  },
  {
    path: "/web-portfolio/atlanta-floor-one",
    component: null,
    props: { component: "atlanta-floor-one" },
  },
  {
    path: "/web-portfolio/stehl-family-dental",
    component: null,
    props: { component: "stehl-family-dental" },
  },
  {
    path: "/web-portfolio/stuart-pipe",
    component: null,
    props: { component: "stuart-pipe" },
  },
  {
    path: "/web-portfolio/tub-boys",
    component: null,
    props: { component: "tub-boys" },
  },
  {
    path: "/web-portfolio/josephhansen-dev",
    component: null,
    props: { component: "josephhansen-dev" },
  },
]

const routePaths = routes.map((route) => route.path)

export { routes, routePaths }
