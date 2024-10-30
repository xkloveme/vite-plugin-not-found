import { promises as fs } from 'fs';
import type { Plugin } from 'vite';

export interface Options {
  fileName?: string;
}

function vitePluginNotFound(options: Options = {}): Plugin {
  const {
    fileName = '404.html',
  } = options;

  return {
    name: 'vite-plugin-not-found',
    apply: 'build',
    async buildStart() {
      const filePath = new URL('./404.html', import.meta.url).pathname;
      try {
          const notFoundContent = await fs.readFile(filePath, 'utf-8'); // 读取404.html内容
          this.emitFile({
            fileName,
            source: notFoundContent,
            type: 'asset',
          });
          console.log(`Successfully generated ${fileName} in the project root.`); // 输出成功信息
      } catch (error) {
          console.error(`Error reading ${filePath}: ${error}`); // 添加错误处理
      }
    },
  };
}

export default vitePluginNotFound;