(使用 Obsidian 以获取完整体验)

# 前置条件

1.学习 HTML、CSS、Javascript 2.检查 node 版本>16.0

```bash
node -v
```

3.VSCode 插件- Prettier-Code formatter
然在设置中搜索 “format on save”，勾选 Format On Save 选项

# 创建 Vite 项目

1.在桌面目录

```bash
npm create vite@4.1.0
npm create vite@latest
```

跟随指引，最后会创建一个项目文件夹
在输入文件名时输入`.`则可以当前目录为根目录创建项目；或是输入项目名，以新建文件夹创建项目

进入项目文件夹

```bash
cd vite-project
npm install
npm run dev
```

安装所有需要的依赖库
**每次都要启动浏览器！**
使用 VSCode 打开项目文件夹

#### 安装 CSS 库

新打开一个 powershell

```bash
npm install bootstrap@5.2.3
```

在 main.tsx 导入 bootstrap

```tsx
import "/node_modules/bootstrap/dist/css/bootstrap.css";
```

快速包裹快捷键：
Ctrl+Shift+P -> 输入 Warp 找到对应方法 -> 输入 div 来包裹元素

#### 安装 ES7+

输入

```tsx
rafce;
```

会自动生成代码

#### 安装 react-router-dom

路径管理器

```bash
npm install react-router-dom
```

```tsx
import { BrowserRouter } from "react-router-dom";
const App = () => (
  <BrowserRouter>
        <Layout /> {" "}
  </BrowserRouter>
);
```

## 部署 Vite 项目到 Github

目标：将项目代码文件上传到`main`分支，将 Vite 生成的 dist 文件夹中的文件上传到`gh-pages`分支。这样，渲染 GithubPages 时，只渲染分支中的内容。

1.安装`gh-pages`

```bash
npm install --save-dev gh-pages
```

然后修改 `package.json` 的 `deploy` 脚本：

```json
"scripts": {
	"dev": "vite",
	"build": "vite build",
	"deploy": "vite build && gh-pages -d dist"
}
```

这里，`gh-pages -d dist` 命令会将 `dist/` 目录中的内容推送到 GitHub Pages。

2.修改 `vite.config.ts`，确保它如下：

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // 使用react插件，但不需要直接在这里配置gh-pages插件
  base: "./", // 确保路径正确，适应 GitHub Pages 环境
});
```

3.运行部署命令
在确认你的配置正确后，你可以通过运行以下命令来构建并部署项目：

```bash
npm run deploy
```

`main`分支应该还是需要手动上传，但是`gh-pages`分支在运行指令后就可以上传

4.设置 GithubPages 渲染分支
