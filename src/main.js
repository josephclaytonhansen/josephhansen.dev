import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import VueMatomo from "vue-matomo"

import Main from "./components/main/Main.vue"
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router"

const routes = [
  { path: "/", component: Main, props: { component: "home" } },
  { path: "/pricing", component: Main, props: { component: "pricing" } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(VueMatomo, {
  host: "https://josephhansen.dev",
  siteId: 1,
  router: router,
  enableLinkTracking: true,
  disableCookies: true,
})

app.use(router)

app.mount("#app")

window._paq.push(["trackPageView"])
