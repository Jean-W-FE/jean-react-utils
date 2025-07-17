# Jean-react-utils

一个为 Next.js 项目打造的 React 组件和工具库，集成了常用 UI 组件、Hooks、主题系统和国际化功能。

## 特性

- 🎨 现代化的 UI 组件，基于 Tailwind CSS
- 🌗 内置暗黑模式支持
- 🌐 完整的国际化解决方案（基于 next-intl）
- 🎯 TypeScript 支持
- ⚡ 轻量级，tree-shakeable
- 📦 开箱即用的主题系统

## 安装

```bash
# npm
npm install jean-react-utils

# yarn
yarn add jean-react-utils

# pnpm
pnpm add jean-react-utils
```

## 快速开始

1. 配置 Tailwind CSS（如果你还没有配置）：

```js
// tailwind.config.js
module.exports = {
  content: [
    // ...
    "./node_modules/jean-react-utils/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
}
```

2. 导入并使用组件：

```tsx
import { Button, Heading } from 'jean-react-utils';

export default function MyComponent() {
  return (
    <div>
      <Heading.PageTitle>Welcome</Heading.PageTitle>
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

## 组件

### Button
现代化的按钮组件，支持多种变体和尺寸。

```tsx
<Button variant="default" size="lg">
  Click me
</Button>
```

变体选项：
- default: 主要按钮
- destructive: 危险操作
- outline: 轮廓按钮
- secondary: 次要按钮
- ghost: 幽灵按钮
- link: 链接样式

尺寸选项：
- default: 默认大小
- sm: 小型按钮
- lg: 大型按钮
- icon: 图标按钮

### Heading
一组标题组件，包含不同级别和样式的标题。

```tsx
<Heading.PageTitle>页面标题</Heading.PageTitle>
<Heading.SectionTitle>区块标题</Heading.SectionTitle>
<Heading.CardTitle>卡片标题</Heading.CardTitle>
<Heading.SubTitle>子标题</Heading.SubTitle>
```

## Hooks

### useForceRerender
强制组件重新渲染的 Hook。

```tsx
import { useForceRerender } from 'jean-react-utils';

const Component = () => {
  const rerender = useForceRerender();
  
  return <button onClick={rerender}>Force Rerender</button>;
};
```

## 主题系统

内置支持明暗主题切换，基于 Tailwind CSS。

```tsx
import { ThemeProvider, ThemeToggle } from 'jean-react-utils';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      {/* 你的应用内容 */}
    </ThemeProvider>
  );
}
```

## 国际化

基于 next-intl 的国际化解决方案，支持自定义消息路径和自动集成。

```tsx
// 配置示例
import { i18nConfig } from 'jean-react-utils';

export default i18nConfig({
  messages: {
    zh: { ... },
    en: { ... }
  }
});
```

## 项目结构
```
jean-react-utils/
├── src/
│   ├── components/    ← Button / Card 等通用组件
│   ├── layout/        ← Header / Footer / Nav
│   ├── hooks/         ← useForceRerender、useMediaQuery 等
│   ├── theme/         ← tailwind theme、token 主题切换
│   ├── i18n/          ← next-intl 封装
│   └── index.ts       ← 统一导出
├── package.json
├── tsconfig.json
└── README.md
```

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 运行测试
pnpm test
```

## 贡献

欢迎提交 Issue 和 Pull Request。

## License

MIT
