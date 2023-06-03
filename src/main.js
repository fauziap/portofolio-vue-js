import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import vClickOutside from 'v-click-outside';

const app = createApp(App)

app.use(vClickOutside);
app.use(router)

app.mount('#app')
