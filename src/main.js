import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Blueprint from './components/main/blocks/blueprint/Blueprint.vue'
import Main from './components/main/Main.vue'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Loading from './components/main/blocks/loading/Loading.vue' 

import { ref } from 'vue'

const routes = [
    { path: '/blueprint', component: Blueprint },
    { path: '/', component: Main, props: {component: 'home'}},
    { path: '/pricing', component: Main, props: {component: 'pricing'}}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

let loading = ref(false)
app.config.globalProperties.$loading = loading

app.use(router)

router.beforeEach((to, from, next) => {
    app.config.globalProperties.$loading.value = true
    next()
})

router.afterEach(() => {
    app.config.globalProperties.$loading.value = false
})

app.component('Loading', Loading)

app.mount('#app')