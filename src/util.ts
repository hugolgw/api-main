const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const mkdirSync = (dirname: string):boolean => {

  if(fs.existsSync(dirname)) {
    return true
  }

  if(mkdirSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname)

    return true
  }

  return false

}

const copy = (src:string, dst:string):void => {
  mkdirSync(dst)

  const paths:Array<string> = fs.readdirSync(src)
  paths.forEach(path=> {
    const _src: string = src + '/' + path
    const _dst: string = dst + '/' + path

    fs.stat(_src, (err:any, stats:any)=> {
      if(err) throw err

      if(stats.isFile()) {
        const readable = fs.createReadStream(_src)
        const writeable = fs.createWriteStream(_dst)

        readable.pipe(writeable)
      } else if(stats.isDirectory()) {
        copy(_src, _dst)
      }

    })
  })

}

export const init=(dir = 'src/api'):void => {
  copy(path.join(__dirname, '../api'), dir)
}

export const docs = (dir = 'src/api') => {

  const dirname:string = path.resolve(process.cwd(), dir + '/docs')

  webpack({
    mode: 'production',
    entry: dirname,
    output: {
        filename: 'api_build.js',
        path: dirname,
        libraryTarget: 'commonjs2'
    }
  }, (err:any, stats:any) => {
      if (err || stats.hasErrors()) return
      const api = require(dirname + '/api_build.js')

      const apiStr = JSON.stringify(api.default, null, "\t")

      fs.writeFile(dirname + '/docs.json', apiStr, (error: any) => {
          if (error) return console.log("生成文档失败,原因是" + error.message)
          fs.unlinkSync(dirname + '/api_build.js')
      })
  })

}