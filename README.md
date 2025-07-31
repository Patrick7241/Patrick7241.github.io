# 极简苹果风格博客系统

## 启动项目

1. 安装依赖：
   ```bash
   npm install
   ```
2. 启动开发环境：
   ```bash
   npm start
   ```

## 构建与部署

1. 构建生产包：
   ```bash
   npm run build
   ```
2. 部署到GitHub Pages（如已配置）：
   ```bash
   npm run deploy
   ```

## 技术栈
- React 19
- Tailwind CSS v3（自定义苹果风格）
- styled-components
- React Router v7

## 目录结构
```
src/
├── components/       # 可复用UI组件
├── layouts/          # 页面布局组件
├── pages/            # 页面级组件
├── assets/           # 静态资源
├── hooks/            # 自定义Hook
├── utils/            # 工具函数
├── styles/           # 全局样式
├── contexts/         # 状态上下文
└── routes/           # 路由配置
```
