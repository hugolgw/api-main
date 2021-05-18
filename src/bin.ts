#!/usr/bin/env node

import { init, docs } from './util'

const [ , , cmd, ...args] = process.argv

function help() {
  console.log(`Usage
    api-init install [dir] (default: src/api)
    api-init docs [dir] (default: src/api)
  `)
}

function misuse() {
  help()
  process.exit(2)
}

const cmds :{
  [key: string]: (...args:string[]) => void
} = {
  install(dir:string):void {
    args.length > 1 ? misuse() : init(dir)
  },
  docs(dir:string):void {
    args.length > 1 ? misuse() : docs(dir)
  },
}

cmds[cmd] ? cmds[cmd](...args) : help()

