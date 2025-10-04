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
    path: "/web-portfolio/chai",
    component: null,
    props: { component: "chai" },
  },
  {
    path: "/web-portfolio/feed-council",
    component: null,
    props: { component: "feed-council" },
  },
  {
    path: "/web-portfolio/josephhansen-dev",
    component: null,
    props: { component: "josephhansen-dev" },
  },
  // Unity routes
  {
    path: "/unity-editor-scripts",
    component: null,
    props: { component: "helpful-editor-scripts" },
  },
  {
    path: "/unity-projects",
    component: null,
    props: { component: "unity-projects" },
  },
  {
    path: "/unity-shader-graph",
    component: null,
    props: { component: "shader-graph" },
  },
  // Programming routes
  {
    path: "/figref",
    component: null,
    props: { component: "figref" },
  },
  {
    path: "/wordpress-themes",
    component: null,
    props: { component: "wordpress-themes" },
  },
  {
    path: "/wordpress-plugins",
    component: null,
    props: { component: "wordpress-plugins" },
  },
  {
    path: "/discourse-image-comparison",
    component: null,
    props: { component: "discourse-image-comparison" },
  },
  {
    path: "/garden-tracker",
    component: null,
    props: { component: "garden-tracker" },
  },
  {
    path: "/javascript-snippets",
    component: null,
    props: { component: "javascript-snippets" },
  },
  {
    path: "/blender-arduino-controller",
    component: null,
    props: { component: "blender-arduino-controller" },
  },
  {
    path: "/arduino-leds",
    component: null,
    props: { component: "arduino-leds" },
  },
  {
    path: "/instagram-scraper",
    component: null,
    props: { component: "instagram-scraper" },
  },
  // Blender routes
  {
    path: "/blender-art",
    component: null,
    props: { component: "art-portfolio" },
  },
  {
    path: "/fruitbat",
    component: null,
    props: { component: "fruitbat" },
  },
  {
    path: "/blender-addons",
    component: null,
    props: { component: "addons" },
  },
  {
    path: "/shading-rig",
    component: null,
    props: { component: "shading-rig" },
  },
  // Communications routes
  {
    path: "/devlog",
    component: null,
    props: { component: "devlog" },
  },
  {
    path: "/blog",
    component: null,
    props: { component: "blog" },
  },
  {
    path: "/presentations",
    component: null,
    props: { component: "presentations" },
  },
  // About Me routes
  {
    path: "/resume",
    component: null,
    props: { component: "resume" },
  },
]

const routePaths = routes.map((route) => route.path)

export { routes, routePaths }
