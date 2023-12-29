import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Blueprint from './components/main/blocks/blueprint/Blueprint.vue'
import Main from './components/main/Main.vue'
import {createRouter, createWebHashHistory, createMemoryHistory} from 'vue-router'

const routes = [
    { path: '/blueprint', component: Blueprint },
    { path: '/', component: Main},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
    })

const app = createApp(App)
app.use(router)

app.mount('#app')