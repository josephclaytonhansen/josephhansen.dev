import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Blueprint from './components/main/blocks/blueprint/Blueprint.vue'
import Main from './components/main/Main.vue'
import Pricing from './components/main/pages/Pricing.vue'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
    { path: '/blueprint', component: Blueprint },
    { path: '/', component: Main},
    { path: '/pricing', component: Pricing}
]

const router = createRouter({
    history: createWebHistory(),
    routes
    })

const app = createApp(App)
app.use(router)

app.mount('#app')