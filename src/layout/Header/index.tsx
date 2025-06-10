'use client';
import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import BreadIcon from './BreadIcon';
import { usePathname } from 'next/navigation';
export interface NavItem {
  key: string;
  href: string;
  label: string;
  className?: {
    pc?: string;
    mobile?: string;
  };
}

export interface HeaderProps {
  logo: React.ReactNode;
  menuItems: NavItem[];
  className?: string;
  /** 是否啟用動畫效果 */
  enableAnimation?: boolean;
}
const getActivedCls = (href: string, selectedKey: string) => {
  if(href.includes(selectedKey) || (href === '/' && selectedKey === 'home')) {
    return 'text-purple-600';
  }
  return '';
}
export const Header: React.FC<HeaderProps> = ({
  logo,
  menuItems,
  className = '',
  enableAnimation = true,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectedKey = usePathname().split('/')[2] || 'home';
  // 如何解决className 重复的问题，传入值与默认值有重复
  const baseNavClassName = classNames(`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 text-gray-600`, className);

  // 動畫配置
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

  // 根據是否啟用動畫返回不同的組件
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
        {/* Desktop Navigation */}
        <DesktopNav menuItems={menuItems} selectedKey={selectedKey} enableAnimation={enableAnimation} />
        <MobileMenuBtn menuItems={menuItems} selectedKey={selectedKey} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileNav menuItems={menuItems} selectedKey={selectedKey} enableAnimation={enableAnimation} />
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
}; 
const DesktopNav = ({ menuItems, selectedKey, enableAnimation }: { menuItems: NavItem[], selectedKey: string, enableAnimation: boolean }) => {
  return (
    <nav className='hidden md:flex items-center space-x-8'>
      {menuItems.map((item) => (
        <NavLink key={item.key} href={item.href} selectedKey={selectedKey} className={item.className?.pc}>{item.label}</NavLink>
      ))}
    </nav>
  )
}

const MobileNav = ({ menuItems, selectedKey, enableAnimation }: { menuItems: NavItem[], selectedKey: string, enableAnimation: boolean }) => {
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
    <MobileMenuComponent className='md:hidden overflow-hidden'
    {
      ...(enableAnimation && {
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        variants: mobileMenuVariants
      })
    }>
      <nav className='flex flex-col space-y-4 py-4 items-center'>
        {menuItems.map((item) => (
          <MobileMenuComponent key={item.key} {...(enableAnimation && {
              initial: { x: -20, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              transition: { delay: 0.1 }
            })}>
            <MobileNavLink href={item.href} selectedKey={selectedKey} className={item.className?.mobile}>{item.label}</MobileNavLink>
          </MobileMenuComponent>
        ))}
      </nav>
    </MobileMenuComponent>
  )
}

const MobileMenuBtn = ({ setIsMenuOpen, isMenuOpen }: { menuItems: NavItem[], selectedKey: string, setIsMenuOpen: (isMenuOpen: boolean) => void, isMenuOpen: boolean }) => {
  return (
      <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-purple-50 rounded-lg transition-colors"
        >
        <BreadIcon isMenuOpen={isMenuOpen}/>
    </button>
  )
}

const NavLink = ({ href, children, className, selectedKey }: { href: string; children: React.ReactNode, className?: string, selectedKey: string }) => {
  const combinedClassName = classNames(
    className || 'hover:text-black transition-colors',
    getActivedCls(href, selectedKey)
  );
  return (
    <Link href={href} legacyBehavior>
      <a className={combinedClassName}>{children}</a>
    </Link>
  );
};

const MobileNavLink = ({ href, children, className, selectedKey }: { href: string; children: React.ReactNode, className?: string, selectedKey: string }) => {
  const combinedClassName = `${className || 'text-lg font-medium text-center hover:text-purple-600 transition-colors'} ${getActivedCls(href, selectedKey)}`;
  return (
    <Link href={href} legacyBehavior>
      <a className={combinedClassName}>{children}</a>
    </Link>
  );
};

export default Header;