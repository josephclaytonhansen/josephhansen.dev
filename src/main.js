import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"

import Main from "./components/main/Main.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: "/", component: Main, props: { component: "home" } },
  { path: "/pricing", component: Main, props: { component: "pricing" } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount("#app")
