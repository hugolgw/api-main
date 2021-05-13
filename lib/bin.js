#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const [, , cmd, ...args] = process.argv;
function help() {
    console.log(`Usage
    api-init install [dir] (default: src/api)
  `);
}
function misuse() {
    help();
    process.exit(2);
}
const cmds = {
    install(dir) {
        args.length > 1 ? misuse() : _1.init(dir);
    }
};
cmds[cmd] ? cmds[cmd](...args) : help();
