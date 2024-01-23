const routes = [
  { path: "/", component: null, props: { component: "home" } },
  { path: "/pricing", component: null, props: { component: "pricing" } },
  { path: "/contact", component: null, props: { component: "contact" } },
  { path: "/contact-me", component: null, props: { component: "contact" } },
  { path: "/about", component: null, props: { component: "about-me" } },
  { path: "/about-me", component: null, props: { component: "about-me" } },
  { path: "/portfolio", component: null, props: { component: "portfolio" } },
  {
    path: "/portfolio/blendernation-bazaar",
    component: null,
    props: { component: "bazaar" },
  },
  {
    path: "/portfolio/okc-south-stake",
    component: null,
    props: { component: "okc-south-stake" },
  },
  {
    path: "/portfolio/build-on-your-land",
    component: null,
    props: { component: "build-on-your-land" },
  },
  {
    path: "/portfolio/hiawatha",
    component: null,
    props: { component: "hiawatha" },
  },
  {
    path: "/portfolio/swim-state-pool",
    component: null,
    props: { component: "swim-state-pool" },
  },
  {
    path: "/portfolio/atlanta-floor-one",
    component: null,
    props: { component: "atlanta-floor-one" },
  },
]

const routePaths = routes.map((route) => route.path)

export { routes, routePaths }
