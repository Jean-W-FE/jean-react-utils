'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface HeadingProps {
  children?: ReactNode;
  className?: string;
  title?: string;
}

// 頁面主標題：大標題，帶漸變色
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

// 區塊標題：中等大小，帶漸變色
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

// 卡片標題：較小，深灰色
export function CardTitle({ children, title,className = '' }: HeadingProps) {
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

// 區塊子標題：最小，帶圖標位置
export function SubTitle({ children, title, className = '' }: HeadingProps) {
  return (
    <motion.h4
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`text-lg font-semibold text-gray-800 ${className}`}
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