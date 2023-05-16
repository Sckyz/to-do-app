import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import { createApp } from 'vue'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)
.use(router)
.use(Quasar, {
  plugins: {}
})

app.mount('#app')
