import { createApp } from 'vue'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import './assets/style.css'
import "./assets/variables.scss"
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Toast)
app.mount('#app')
