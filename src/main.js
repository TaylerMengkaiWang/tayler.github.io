import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/base.css'
import './css/academic.css'
import './css/utils.css'
import '@/css/animation.css'

const app = createApp(App)
app.use(router)
app.mount('#app')


