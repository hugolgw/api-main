# 使用

## 自动

初始化项目 API

```shell
npx api-init install [dir] (default: src/api)
```

生成接口文档

```shell
npx api-init docs [dir] (default: src/api)
```

## 手动

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

3. 初始化项目 api ,默认文件(default: src/api)

```shell
npm run api-init install [dir] (default: src/api)
```

4. 生成项目 api 文档 ,默认文件(default: src/api)

```shell
npm run api-init docs [dir] (default: src/api)
```

# 默认结构

```shell
├── src
    ├── api
        ├── docs
            └── index.js         #生成接口文档明显
        ├── modules
            ├── example.js       #接口模块配置
            └── ...
        ├── request
            ├── config.js       #公共请求方法配置
            └── index.js        #封装公共请求方法
        ├── docs.json           #接口文档
        └── index.js            #自动生成接口方法
    ├── ...
```

# License

MIT
