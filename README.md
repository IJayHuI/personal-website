# Personal Website
这是一个使用 Vue 3 和 Vite 构建的个人网站项目。
![首页截图](./docs/home-screenshot.png "首页截图")

## 技术栈
- Vue 3
- Vite
- Vue Router
- Naive UI
- tailwindcss
- Supabase
- Pinia

## 项目结构
```
src/
├── App.vue                    # 根组件
├── main.ts                    # 应用入口文件
├── routes.ts                  # 路由配置
├── style.css                  # 全局样式
├── vite-env.d.ts              # Vite 类型定义
├── assets/                    # 静态资源
│   └── contact-me/             # 联系方式相关资源
├── components/                # 组件目录
│   ├── JayFooter.vue           # 页脚组件
│   ├── JayGui.vue              # GUI 组件
│   ├── JayLoading.vue          # 加载组件
│   ├── home/                   # 首页相关组件
│   ├── navigate/               # 导航相关组件
│   └── project/                # 项目相关组件
├── configs/                   # 配置文件
├── containers/                # 容器组件
│   ├── JayFooter.vue           # 页脚容器
│   ├── JayGui.vue              # GUI 容器
│   ├── home/                   # 首页容器
│   ├── navigate/               # 导航容器
│   └── project/                # 项目容器
├── directives/                # 自定义指令
├── lib/                       # 工具库
├── stores/                    # 状态管理
└── theme/                     # 主题配置
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
