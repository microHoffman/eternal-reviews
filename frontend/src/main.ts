import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import {createRouter, createWebHistory} from "vue-router/auto";

const app = createApp(App)
const head = createHead()

const router = createRouter({
    history: createWebHistory(),
})

app.use(router)
app.use(head)
app.mount(document.body)
