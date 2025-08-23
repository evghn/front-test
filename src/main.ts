import 'vuetify/styles' // Важно: должен идти перед вашими стилями
import './assets/main.css'
import '@mdi/font/css/materialdesignicons.min.css' // Исправлен импорт

import { createApp } from 'vue'

import App from './App.vue'
import { router } from '@/router'
import { vuetify } from '@/config/vuetify'

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
