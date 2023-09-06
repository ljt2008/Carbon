import { createApp } from 'vue'
import { createPinia } from 'pinia'
//引入初始化样式资源
import '@/styles/common.scss'
//引入theme.css变量
import '@/styles/theme.css'
//引入swiper
import 'swiper/css';
import App from './App.vue'
// 同一引入注册
import { componentPlugin } from '@/components'
// 引入持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
//引入懒加载
import imglazy from './utils/imglazy'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(componentPlugin)
app.use(imglazy, {
    defaultsrc: "https://up.92sucai.com/image/20180925/1537866929329022.jpg"
})
app.mount('#app')
