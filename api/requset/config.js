import axios from 'axios'

const http = axios.create({
    timeout: 500
})

// 请求拦截处理
http.interceptors.request.use()

// 请求响应拦截处理
http.interceptors.response.use(
    ({status, data}) => {
        if(status === 200) {
            return data
        } else {
            Promise.reject(data)
        }
    },
    error => Promise.reject(JSON.parse(JSON.stringify(error)))
)

export default http