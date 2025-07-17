'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import BreadIcon from './BreadIcon';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../../theme/providers/theme-toggle';

/**
 * 导航项接口
 * @interface NavItem
 */
export interface NavItem {
  /** 导航项唯一标识 */
  key: string;
  /** 导航链接地址 */
  href: string;
  label: string;
  /** 自定义样式类名 */
  className?: {
    /** PC端样式 */
    pc?: string;
    /** 移动端样式 */
    mobile?: string;
  };
}

export interface HeaderTheme {
  activeClassName?: string;
  mobileMenu?: {
    button?: string;
    nav?: string;
  };
}

export interface HeaderProps {
  /** Logo 组件 */
  logo: React.ReactNode;
  /** 导航菜单项 */
  menuItems: NavItem[];
  /** 自定义样式类名 */
  className?: string;
  /** 是否启用动画效果 */
  enableAnimation?: boolean;
  theme?: HeaderTheme;
}

const getActivedCls = (href: string, selectedKey: string, activeClassName: string = 'text-primary') => {
  if(href.includes(selectedKey) || (href === '/' && selectedKey === 'home')) {
    return activeClassName;
  }
  return '';
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  menuItems,
  className = '',
  enableAnimation = true,
  theme = {}
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectedKey = usePathname().split('/')[2] || 'home';
  const baseNavClassName = `fixed top-0 left-0 right-0 z-50 backdrop-blur-lg ${className}`;

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const HeaderWrapper = enableAnimation ? motion.header : 'header';
  return (
    <HeaderWrapper 
      className={baseNavClassName}
      {...(enableAnimation && {
        initial: "hidden",
        animate: "visible",
        variants: navVariants
      })}
    >
      <div className='container flex items-center justify-between p-4'>
        {logo}

        <DesktopNav 
          menuItems={menuItems} 
          selectedKey={selectedKey} 
          enableAnimation={enableAnimation}
          activeClassName={theme.activeClassName}
        />
        <MobileMenuBtn 
          menuItems={menuItems} 
          selectedKey={selectedKey} 
          setIsMenuOpen={setIsMenuOpen} 
          isMenuOpen={isMenuOpen}
          className={theme.mobileMenu?.button}
        />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <MobileNav 
            menuItems={menuItems} 
            selectedKey={selectedKey} 
            enableAnimation={enableAnimation}
            className={theme.mobileMenu?.nav}
            activeClassName={theme.activeClassName}
          />
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
}; 

const DesktopNav = ({ 
  menuItems, 
  selectedKey, 
  enableAnimation,
  activeClassName 
}: { 
  menuItems: NavItem[], 
  selectedKey: string, 
  enableAnimation: boolean,
  activeClassName?: string 
}) => {
  return (
    <nav className='hidden md:flex items-center space-x-8'>
      <ThemeToggle/>
      {menuItems.map((item) => (
        <NavLink 
          key={item.key} 
          href={item.href} 
          selectedKey={selectedKey} 
          className={item.className?.pc}
          activeClassName={activeClassName}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

const MobileNav = ({ 
  menuItems, 
  selectedKey, 
  enableAnimation,
  className,
  activeClassName 
}: { 
  menuItems: NavItem[], 
  selectedKey: string, 
  enableAnimation: boolean,
  className?: string,
  activeClassName?: string 
}) => {
  const MobileMenuComponent = enableAnimation ? motion.div : 'div';
  const mobileMenuVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
  return (
    <MobileMenuComponent 
      className={`md:hidden overflow-hidden ${className || ''}`}
      {...(enableAnimation && {
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        variants: mobileMenuVariants
      })}
    >
      <nav className='flex flex-col space-y-4 py-4 items-center'>
        <ThemeToggle/>
        {menuItems.map((item) => (
          <MobileMenuComponent key={item.key} {...(enableAnimation && {
              initial: { x: -20, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              transition: { delay: 0.1 }
            })}>
            <MobileNavLink 
              href={item.href} 
              selectedKey={selectedKey} 
              className={item.className?.mobile}
              activeClassName={activeClassName}
            >
              {item.label}
            </MobileNavLink>
          </MobileMenuComponent>
        ))}
      </nav>
    </MobileMenuComponent>
  )
}

const MobileMenuBtn = ({ 
  setIsMenuOpen, 
  isMenuOpen,
  className = 'p-2 hover:bg-accent rounded-lg transition-colors'
}: { 
  menuItems: NavItem[], 
  selectedKey: string, 
  setIsMenuOpen: (isMenuOpen: boolean) => void, 
  isMenuOpen: boolean,
  className?: string
}) => {
  return (
    <button 
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={`md:hidden ${className}`}
    >
      <BreadIcon isMenuOpen={isMenuOpen}/>
    </button>
  )
}

const NavLink = ({ 
  href, 
  children, 
  className, 
  selectedKey,
  activeClassName 
}: { 
  href: string; 
  children: React.ReactNode, 
  className?: string, 
  selectedKey: string,
  activeClassName?: string
}) => {
  const combinedClassName = `${className || 'hover:text-foreground transition-colors'} ${getActivedCls(href, selectedKey, activeClassName)}`;
  return (
    <Link href={href} legacyBehavior>
      <a className={combinedClassName}>{children}</a>
    </Link>
  );
};

const MobileNavLink = ({ 
  href, 
  children, 
  className, 
  selectedKey,
  activeClassName 
}: { 
  href: string; 
  children: React.ReactNode, 
  className?: string, 
  selectedKey: string,
  activeClassName?: string
}) => {
  const combinedClassName = `${className || 'text-lg font-medium text-center hover:text-primary transition-colors'} ${getActivedCls(href, selectedKey, activeClassName)}`;
  return (
    <Link href={href} legacyBehavior>
      <a className={combinedClassName}>{children}</a>
    </Link>
  );
};

export default Header;