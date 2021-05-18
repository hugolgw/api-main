# api-init

# Usage

Init web project api

```ssh
npx api-init install [dir] (default: src/api)
```

Interface documentation

```ssh
npx api-init docs [dir] (default: src/api)
```

# Project API default structure

```ssh
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

## License

MIT
