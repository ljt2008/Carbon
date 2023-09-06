import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getNavListAPI } from '@/apis/layout'
export const useLayoutStore = defineStore('layout', () => {
    const navList = ref([])
    const getNavList = async () => {
        const res = await getNavListAPI()
        navList.value = res.data
    }
    return { navList, getNavList }
})
