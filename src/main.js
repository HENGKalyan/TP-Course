import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // Import router

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)          // Use Pinia
app.use(router)        // Use the router 

app.mount('#app')