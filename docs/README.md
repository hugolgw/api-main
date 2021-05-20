# 介绍

**api-init 是给前端项目接口规范管理初始化的包工具，通过命令快速生成接口管理模块，通过添加配置项自动生成对应接口方法。api-init 包有以下作用：**

- 新项目快速生成接口管理模块
- 接口命名规范及方法重名得到解决
- 接口模块划分更佳合理，通过配置添加接口方法
- 规避同一接口输出多个接口方法或穿插引用
- 开发人员快速查阅有哪些接口方法及作用
- 通过命令快速输出所有接口说明

# 安装

## npx 安装使用

1. 安装 `api-init`

```shell
npm install api-init --save-dev
```

2. 项目接口 API 初始化命令

- 初始化，默认路径(default: src/api)

```shell
npx api-init install

```

- 自定义路径，嵌套路径用/连接（如：src/api）

```shell
npx api-init install api

```

3. 生成接口文档（注：文档路径需要和接口 api 初始化路径相同）

- api 初始化使用默认路径，则文档命令：

```shell
npx api-init docs
```

- api 初始化使用自动义（如：api），则文档命令：

```shell
npx api-init docs api
```

## npm 安装使用

1. 安装 `api-init`

```shell
npm install api-init --save-dev
```

2. package.json 添加 **npm scripts** 命令

```js
// package.json
{
  "scripts": {
    "api-init": "api-init",
  }
}
```

3. 项目接口 API 初始化命令

- 初始化，默认路径(default: src/api)

```shell
npm run api-init install
```

- 自定义路径，嵌套路径用/连接（如：src/api）

```shell
npm run api-init install api

```

4.生成接口文档（注：文档路径需要和接口 api 初始化路径相同）

- api 初始化使用默认路径，则文档命令：

```shell
npm run api-init docs
```

- api 初始化使用自动义（如：api），则文档命令：

```shell
npm run api-init docs api
```

# 接口 API 默认结构

```shell
├── src
    ├── api
        ├── docs
            └── index.js        #生成接口文档明显
        ├── modules
            ├── example.js      #接口模块配置
            └── ...
        ├── request
            ├── config.js       #公共请求方法配置
            └── index.js        #封装公共请求方法
        ├── docs.json           #接口方法明显
        └── index.js            #自动生成接口方法
    ├── ...
```

# 添加接口配置

在 api/modules 目录下添加对应的模块，按照规定添加对应配置项目，就可以生成对应的接口方法，如：

```js
// 1、modules添加example.js模块
// 2、添加接口对应配置项
export default [
  {
    name: "query", // 接口方法名取接口url最后一个单词
    method: "get", // 接口请求方法
    url: "example/query", // 接口url
    params: {}, // 接口默认传参
    docs: "接口说明", // 接口说明注释
  },
];
```

# 接口使用

```js
// api文件夹配置别名api
import api from 'api' // 或 import api from '@/api'

// 使用
api.example.query({ // 参数 })

```

# 相关地址

api-init 文档地址：
https://hugolgw.github.io/api-main

api-init 包地址：
https://www.npmjs.com/package/api-init

api-init 源码地址：
https://github.com/hugolgw/api-main

**原创不易，欢迎 star**

# License

MIT
