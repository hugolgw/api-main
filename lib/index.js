"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const fs = require("fs");
const path = require("path");
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
