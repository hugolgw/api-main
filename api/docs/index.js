const requireApi = require.context('../modules', false, /\.js$/)

const apiDocs = requireApi.keys().reduce((result, path) => {
    const moduleName = path.replace(/^\.\/([\w-]+)\.js$/, '$1')
    const moduleContent = requireApi(path).default || []

    const moduleApi = moduleContent.reduce((pre, cur) => {
        return {
            ...pre,
            [cur.name]: `${moduleName}.${cur.name}`,
            [cur.name + '_decs']: cur.decs
        }

    }, {})

    return {
        ...result,
        [moduleName]: moduleApi
    }

}, {})

export default apiDocs