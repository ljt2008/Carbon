import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'
import 'element-plus/theme-chalk/el-message.css'
import router from '@/router'
// 创建axios实例
const httpInstance = axios.create({
    baseURL: 'http://127.0.0.1:7001/api',
    timeout: 5000
})

httpInstance.interceptors.request.use(config => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => {
    const userStore = useUserStore()
    if (res.data.code === 401) {
        userStore.clearUserInfo()
        router.push('/login')
    } else if (res.data.code !== 200) {
        console.log(res.data.code);
        //统一处理提示
        ElMessage({
            type: 'warning',
            message: res.data.message
        })
        throw new Error("res.data.message")
    }
    return res.data

}, e => {
    return Promise.reject(e)
})


export default httpInstance