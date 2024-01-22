const routes = [
  { path: "/", component: null, props: { component: "home" } },
  { path: "/pricing", component: null, props: { component: "pricing" } },
]

const routePaths = routes.map((route) => route.path)

export { routes, routePaths }
