import httpInstance from "@/utils/uploadhttp";
// 拿到已上传内容
export const upload_already = ({ HASH, suffix }) => httpInstance({
    method: 'get',
    url: '/upload_already',
    params: {
        HASH,
        suffix,
    }
})
// 申请合并
export const upload_merge = ({ HASH, count }) => httpInstance({
    method: 'post',
    url: '/upload_merge',
    data: {
        HASH,
        count,
    },
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
})
// 上传切片
export const upload_chunk = (fm) => httpInstance({
    method: 'post',
    url: '/upload_chunk',
    data: fm
})