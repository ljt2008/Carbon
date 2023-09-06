import httpInstance from "@/utils/http";
export const getNavListAPI = () => httpInstance({
    url: '/v1/layout/navlist', method: 'GET'
})