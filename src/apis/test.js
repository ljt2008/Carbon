import httpInstance from "@/utils/http";
// 加入购物车
export const testAPI = () => httpInstance({
    url: '/hello'
})

// 测试
export const testAPI2 = () => httpInstance({
    method: 'post',
    url: '/api/login',
    data: {
        username: 'admin',
        password: '123'
    }
})

// 测试
export const testAPI3 = () => httpInstance({
    method: 'get',
    url: '/admin/getinfo'
})