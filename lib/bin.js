#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const [, , cmd, ...args] = process.argv;
function help() {
    console.log(`Usage
    api-init install [dir] (default: src/api)
    api-init docs [dir] (default: src/api)
  `);
}
function misuse() {
    help();
    process.exit(2);
}
const cmds = {
    install(dir) {
        args.length > 1 ? misuse() : util_1.init(dir);
    },
    docs(dir) {
        args.length > 1 ? misuse() : util_1.docs(dir);
    },
};
cmds[cmd] ? cmds[cmd](...args) : help();
