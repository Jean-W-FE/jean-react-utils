'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * Heading 组件的通用属性类型
 */
export interface HeadingProps {
  /** 子元素内容 */
  children?: ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 标题文本，可以替代 children */
  title?: string;
}

/**
 * 页面主标题组件，带有渐变色效果和动画
 * 
 * @component
 * @example
 * ```tsx
 * <PageTitle>Welcome to My Site</PageTitle>
 * 
 * // 使用 title 属性
 * <PageTitle title="Welcome" className="my-8" />
 * ```
 */
export function PageTitle({ children, title, className = '' }: HeadingProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent ${className}`}
    >
      {title || children}
    </motion.h1>
  );
}

/**
 * 区块标题组件，用于页面主要区块的标题
 * 
 * @component
 * @example
 * ```tsx
 * <SectionTitle>Featured Products</SectionTitle>
 * 
 * // 自定义样式
 * <SectionTitle className="mb-8">Our Services</SectionTitle>
 * ```
 */
export function SectionTitle({ children, title, className = '' }: HeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent ${className}`}
    >
      {title || children}
    </motion.h2>
  );
}

/**
 * 卡片标题组件，用于卡片或小区块的标题
 * 
 * @component
 * @example
 * ```tsx
 * <CardTitle>Product Features</CardTitle>
 * 
 * // 在卡片中使用
 * <Card>
 *   <CardTitle>Premium Plan</CardTitle>
 *   <CardContent>...</CardContent>
 * </Card>
 * ```
 */
export function CardTitle({ children, title, className = '' }: HeadingProps) {
  return (
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`text-2xl font-bold text-gray-800 ${className}`}
    >
      {title || children}
    </motion.h3>
  );
}

/**
 * 子标题组件，用于次级内容的标题
 * 
 * @component
 * @example
 * font-semibold: font-weight: 600;
 * text-lg: font-size: 1.125rem;
 * ```tsx
 * <SubTitle>Technical Details</SubTitle>
 * 
 * // 在列表中使用
 * <div>
 *   <SubTitle>Specifications</SubTitle>
 *   <ul>...</ul>
 * </div>
 * ```
 */
export function SubTitle({ children, title, className = '' }: HeadingProps) {
  return (
    <motion.h4
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`text-lg font-semibold ${className}`}
    >
      {title || children}
    </motion.h4>
  );
}

export default {
  PageTitle,
  SectionTitle,
  CardTitle,
  SubTitle,
}