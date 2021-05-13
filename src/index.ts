import fs = require('fs')
import path = require('path')

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

    fs.stat(_src, (err, stats)=> {
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