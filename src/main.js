// import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css';
import 'bootstrap'
import emailjs from '@emailjs/browser';

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

emailjs.init("PNTKvMexyaOTLYdCg")

const app = createApp(App)

app.use(router)

app.mount('#app')
