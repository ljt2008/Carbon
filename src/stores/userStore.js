import { loginAPI } from '@/apis/user.js'
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const getUserInfo = async ({ usernameOrEmail, password }) => {
    const res = await loginAPI({ usernameOrEmail, password })
    userInfo.value = res.data.user;
    userInfo.value.token = res.data.token;
  }
  const clearUserInfo = () => {
    userInfo.value = {}
  }
  return {
    userInfo,
    clearUserInfo,
    getUserInfo
  }
}, {
  persist: true
})