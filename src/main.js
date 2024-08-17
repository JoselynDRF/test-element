import { createApp } from 'vue'
import App from './App.vue'
import Element from 'element-ui'

import './assets/main.css'
import 'element-ui/lib/theme-chalk/index.css';

// Element UI: npm i --legacy-peer-deps

const app = createApp(App)

app.use(Element)
app.mount('#app')