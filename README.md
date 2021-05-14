# api-init

# Usage

Int web project api

```ssh
npx api-init install
```

# Project API default structure

```ssh
├──src
    ├──api                      
        ├──modules               #模块划分和后端接口保持一致
            ├── example.js       #接口模块配置    
            └── ...
        ├──request               
            ├── config.js       #公共请求方法配置
            └── index.js        #封装公共请求方法
        └── index.js            #自动生成接口方法  
    ├── ...       
```

## License

MIT