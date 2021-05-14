import http from './config'

export const httpGet = (url, params) => {
    return http({
        url,
        method: 'get',
        params
    })
}

export const httpPost = (url, data) => {
    return http({
        url,
        method: 'post',
        data
    })
}

export const httpPut = (url, data) => {
    return http({
        url,
        method: 'put',
        data
    })
}

export const httpDelete = (url, params, id) => {
    return http({
        url: id ? `${url}/${id}` : url ,
        method: 'detele',
        params
    })
}

export default {
    get: httpGet,
    post: httpPost,
    put: httpPut,
    delete: httpDelete
}