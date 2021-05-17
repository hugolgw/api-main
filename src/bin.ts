#!/usr/bin/env node

import { init, decs } from './util'

const [ , , cmd, ...args] = process.argv

function help() {
  console.log(`Usage
    api-init install [dir] (default: src/api)
    api-init decs [dir] (default: src/api)
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
  decs(dir:string):void {
    args.length > 1 ? misuse() : decs(dir)
  },
}

cmds[cmd] ? cmds[cmd](...args) : help()

