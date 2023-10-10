import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'bootstrap/dist/css/bootstrap.css'
import 'boxicons/css/boxicons.css'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
