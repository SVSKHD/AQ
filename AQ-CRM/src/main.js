import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {createPinia} from "pinia"
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import "./assets/app.css"

const AQUACRM = createApp(App)

AQUACRM
.use(Quasar, quasarUserOptions)
.use(store)
.use(createPinia())
.use(router)
.mount('#app')
