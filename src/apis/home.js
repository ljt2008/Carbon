import httpInstance from "@/utils/http";
export const getCategoryListAPI = () => httpInstance({
    url: '/v1/home/categoryList', method: 'GET'
})
export const geteditorsChoiceAPI = () => httpInstance({
    url: '/v1/home/editorsChoice', method: 'GET'
})
export const getNewsAPI = () => httpInstance({
    url: '/v1/home/news', method: 'GET'
})
export const getHotsAPI = () => httpInstance({
    url: '/v1/home/hots', method: 'GET'
})