# Jean-utils

## 目的

个人 Next.js 博客与网站的可复用 UI 组件库

## 内容
- 通用组件（Button、Card）
- React Hooks（useForceRerender）
- Tailwind theme 配置
- i18n 封装，基于 next-intl
  - 支持调用方自定义messages路径
  - 兼容 getRequestConfig 自动集成功能

## 项目结构
```
jean-utils/
├── src/
│   ├── components/    ← Button / Card 等通用组件
│   ├── layout/        ← Header / Footer / Nav
│   ├── hooks/         ← useForceRerender、useMediaQuery 等
│   ├── theme/         ← tailwind theme、token
│   ├── i18n/          ← next-intl 封装
│   └── index.ts       ← 统一导出
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── vitest.config.ts
├── postcss.config.js
└── README.md
```

## 现有痛点
- 每次调试都涉及多个package，心智负担大
- 更新组件时要发布版本、链接依赖、跑构建流程

```

```