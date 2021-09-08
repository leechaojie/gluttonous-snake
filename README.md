# ts贪吃蛇

根据 [尚硅谷](https://www.bilibili.com/video/BV1Xy4y1v7S2?spm_id_from=333.999.0.0) 的ts教程实现

项目使用 typescript-eslint 作为代码规范，如果遇到错误，在根目录 .vscode 文件夹下（没有就创建一个）settings.json 里配置以下代码

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn start
```

### Compiles for development

```bash
yarn build:dev
```

### Compiles and minifies for production

```bash
yarn build:prod
```
