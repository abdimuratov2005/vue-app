import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createApp, configureCompat } from 'vue'
import App from '@/App.vue'
import router from '@/router'
// import store from './store'
import '@/assets/style/style.scss'

configureCompat({
    MODE: 2,
    FEATURE_ID_A: false,
    FEATURE_ID_B: false
  })
const app = createApp(App)

app
    .use(router)
    .mount('#app')
    // .use(store)