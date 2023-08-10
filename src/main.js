import { createApp } from 'vue'
import { createPinia } from 'pinia'
//引入初始化样式资源
import '@/styles/common.scss'
//引入theme.css变量
import '@/styles/theme.css'
//引入swiper
import 'swiper/css';
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
