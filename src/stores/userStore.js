import { loginAPI } from '@/apis/user.js'
import { defineStore } from 'pinia'
import { ref, } from 'vue'
import { useRouter } from 'vue-router';
export const useUserStore = defineStore('user', () => {
  const router = useRouter();
  const userInfo = ref({})
  const getUserInfo = async ({ usernameOrEmail, password }) => {
    const res = await loginAPI({ usernameOrEmail, password })
    userInfo.value = res.data.user;
    userInfo.value.permissions = userInfo.value.permissions.split(',')
    userInfo.value.token = res.data.token;
  }
  const clearUserInfo = () => {
    userInfo.value = {}
    router.push("/")
  }
  return {
    userInfo,
    clearUserInfo,
    getUserInfo
  }
}, {
  persist: true
})