"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docs = exports.init = void 0;
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const mkdirSync = (dirname) => {
    if (fs.existsSync(dirname)) {
        return true;
    }
    if (mkdirSync(path.dirname(dirname))) {
        fs.mkdirSync(dirname);
        return true;
    }
    return false;
};
const copy = (src, dst) => {
    mkdirSync(dst);
    const paths = fs.readdirSync(src);
    paths.forEach(path => {
        const _src = src + '/' + path;
        const _dst = dst + '/' + path;
        fs.stat(_src, (err, stats) => {
            if (err)
                throw err;
            if (stats.isFile()) {
                const readable = fs.createReadStream(_src);
                const writeable = fs.createWriteStream(_dst);
                readable.pipe(writeable);
            }
            else if (stats.isDirectory()) {
                copy(_src, _dst);
            }
        });
    });
};
const init = (dir = 'src/api') => {
    copy(path.join(__dirname, '../api'), dir);
};
exports.init = init;
const docs = (dir = 'src/api') => {
    const dirname = path.resolve(process.cwd(), dir + '/docs');
    webpack({
        mode: 'production',
        entry: dirname,
        output: {
            filename: 'api_build.js',
            path: dirname,
            libraryTarget: 'commonjs2'
        }
    }, (err, stats) => {
        if (err || stats.hasErrors())
            return;
        const api = require(dirname + '/api_build.js');
        const apiStr = JSON.stringify(api.default, null, "\t");
        fs.writeFile(dirname + '/docs.json', apiStr, (error) => {
            if (error)
                return console.log("生成文档失败,原因是" + error.message);
            fs.unlinkSync(dirname + '/api_build.js');
        });
    });
};
exports.docs = docs;
