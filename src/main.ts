import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
