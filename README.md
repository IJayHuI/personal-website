# Personal Website

这是一个使用 Vue 3 和 Vite 构建的个人网站项目。

## 技术栈

- Vue 3
- Vite
- Vue Router
- Naive UI
- Axios

## 项目结构

```
src/
├── components/     # 组件目录
├── services/       # API 服务
├── views/         # 页面视图
├── routes.js      # 路由配置
├── main.js        # 入口文件
└── App.vue        # 根组件
```

## 开发环境要求

- Node.js
- pnpm

## 安装和运行

1. 安装依赖：
```bash
pnpm install
```

2. 启动开发服务器：
```bash
pnpm dev
```

3. 构建生产版本：
```bash
pnpm build
```

4. 预览生产版本：
```bash
pnpm preview
```

## 开发说明

- 使用 `pnpm dev` 启动开发服务器，默认运行在 `http://localhost:5173`
- 项目使用 Vue 3 组合式 API 开发
- 使用 Naive UI 作为 UI 组件库
- 使用 Vue Router 进行路由管理

