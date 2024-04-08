import { createApp } from 'vue'
import './style.css'
import 'vant/lib/index.css'
import App from './App.vue'
import store from './store'
import router from './router'
import './utils/rem'
import { Button } from 'vant'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Button)
app.mount('#app')
