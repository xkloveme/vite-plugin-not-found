<h1 align="center">vite-plugin-not-found</h1>

<p align="center">
  一个专注于生成 Git 项目打包信息的 Vite 插件。
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vite-plugin-not-found">
    <img src="https://img.shields.io/npm/v/vite-plugin-not-found?color=orange&label=" alt="版本" />
  </a>
  <a href="https://github.com/qmhc/vite-plugin-not-found/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/vite-plugin-not-found" alt="许可证" />
  </a>
</p>

**中文** | [English](./README.md)

## 更适合与华通云开发工具搭配使用

[Microsoft Store 下载](https://microsoftedge.microsoft.com/addons/detail/%E5%8D%8E%E9%80%9A%E4%BA%91%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/afmbapanbkfkkpknjdepbafobedckoeg?hl=zh-CN)

[使用文档](https://wt-front-end.github.io/wt-docs/wt-edge.html)


## 安装
```bash
pnpm add vite-plugin-not-found
```

```bash
yarn add vite-plugin-not-found
```

```bash
npm i vite-plugin-not-found
```

在您的 `vite.config.ts` 或 `vite.config.js` 中添加插件：

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vitePluginNotFound from 'vite-plugin-not-found'

export default defineConfig({
  plugins: [
    vitePluginNotFound(),
  ],
})

```

## 许可证

[MIT](./LICENSE) License © 2024 [xkloveme](https://github.com/xkloveme)