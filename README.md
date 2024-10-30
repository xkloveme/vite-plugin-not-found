<h1 align="center">vite-plugin-not-found</h1>

<p align="center">
A Vite plugin that focuses on generating packaging information for Git projects.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vite-plugin-not-found">
    <img src="https://img.shields.io/npm/v/vite-plugin-not-found?color=orange&label=" alt="version" />
  </a>
  <a href="https://github.com/qmhc/vite-plugin-not-found/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/vite-plugin-not-found" alt="license" />
  </a>
</p>


**English** | [中文](./README.zh-CN.md)

## It is better to use with watone tools power builder

[Microsoft Store Download](https://microsoftedge.microsoft.com/addons/detail/%E5%8D%8E%E9%80%9A%E4%BA%91%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/afmbapanbkfkkpknjdepbafobedckoeg?hl=zh-CN)

[Use Documentation](https://wt-front-end.github.io/wt-docs/wt-edge.html)

Get the `version` information from `package.json`, then automatically put the version file `version.json` in your project dist folder when packaging.


## Install
```bash
pnpm add vite-plugin-not-found
```
```bash
yarn add vite-plugin-not-found
```

```bash
npm i vite-plugin-not-found
```

Add plugin to your `vite.config.ts` or `vite.config.js`:

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

## License

[MIT](./LICENSE) License © 2024 [xkloveme](https://github.com/xkloveme)
