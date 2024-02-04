import './assets/styles/main.css'
import './assets/styles/app-style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { inject } from '@vercel/analytics';

const app = createApp(App)

app.use(router)

app.mount('#portfolio-md')

//inject() is for analytics
inject();