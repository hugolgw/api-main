import request from './requset'

const requireApi = require.context('./modules', false, /\.js$/)

const api = requireApi.keys().reduce((result, path) => {
    const moduleName = path.replace(/^\.\/([\w-]+)\.js$/, '$1')
    const moduleContent = requireApi(path).default || []

    const moduleApi = moduleContent.reduce((pre, cur) => {
        return {
            ...pre,
            [cur.name]: function (params = {}, id) {
                const method = request[cur.method]
                return method({
                    ...cur.params,
                    ...params
                }, id)
            },
            [cur.name + '_decs']: cur.decs
        }

    }, {})

    return {
        ...result,
        [moduleName]: moduleApi
    }

}, {})

console.log('api===', api)

export default api