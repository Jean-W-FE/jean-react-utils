
import type { Metadata, Viewport } from "next"

/**
 * 基础布局组件的属性接口
 * @interface BaseLayoutProps
 */
export interface BaseLayoutProps {
  /** 子元素内容 */
  children: React.ReactNode,
  /** Next.js viewport 配置 */
  viewport?: Viewport,
  /** Next.js metadata 配置 */
  metadata?: Metadata,
}

/**
 * 基础布局组件，提供页面的基本结构
 * 
 * @component
 * @example
 * ```tsx
 * <BasicLayout>
 *   <main>
 *     <h1>Welcome</h1>
 *     <p>Content goes here</p>
 *   </main>
 * </BasicLayout>
 * ```
 * 
 * @example
 * ```tsx
 * // 带有 metadata 的使用示例
 * <BasicLayout
 *   metadata={{
 *     title: 'My Page',
 *     description: 'Page description'
 *   }}
 * >
 *   <div>Content</div>
 * </BasicLayout>
 * ```
 */
export default function BasicLayout({ children }: { children: React.ReactNode }):JSX.Element {
  return (
    <div>
      {children}
    </div>
  )
}
