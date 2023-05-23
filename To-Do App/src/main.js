import App from './App.vue'
import router from './router'
import { Quasar, Notify, Dialog } from 'quasar'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const pinia = createPinia()

const app = createApp(App)
.use(router)
.use(pinia)
.use(Quasar, {
  plugins: {
    Notify,
    Dialog
  }
})

app.mount('#app')
