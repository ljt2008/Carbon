import httpInstance from "@/utils/http";
export const loginAPI = ({ usernameOrEmail, password }) => httpInstance({
    url: '/v1/user/login', method: 'POST', data: {
        usernameOrEmail, password
    }
})