'use client';
import React from 'react';
import Link from 'next/link';

export interface FooterLink {
  href: string;
  title: string;
}

export interface FooterTexts {
  copyright: string;
  privacy: string;
  terms: string;
  social: string;
}

export interface FooterProps {
  /** 網站基本信息 */
  site: {
    name: string;
    description: string;
  };
  /** 導航鏈接 */
  navigation: {
    /** 快速鏈接區塊 */
    quickLinks: {
      title: string;
      items: FooterLink[];
    };
    /** 社交媒體鏈接 */
    socialLinks: FooterLink[];
  };
  /** 頁腳文本 */
  texts: FooterTexts;
  /** 自定義類名 */
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  site,
  navigation,
  texts,
  className = '',
}) => {
  
  // 请帮我改造下这个模块，使其在移动端内容水平居中展示
  return (
    <footer className={`relative bg-gradient-to-b from-gray-50 to-gray-100 pt-16 pb-6 ${className}`}>
      <div className="absolute inset-0 bg-grid-gray-200/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="container mx-auto p-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {site.name}
            </h3>
            <p className="text-gray-600 max-w-xs hover-text-foreground">
              {site.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 ">
            <h4 className="text-sm font-semibold uppercase text-foreground">
              {navigation.quickLinks.title}
            </h4>
            <nav className="flex flex-col space-y-2">
              {navigation.quickLinks.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase text-foreground">
              {texts.social}
            </h4>
            <div className="flex space-x-4">
              {navigation.socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: copyright, privacy and terms */}
        <div className="border-t pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              {texts.copyright}
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm px-8 text-gray-600 hover:text-purple-600 transition-colors">
                {texts.privacy}
              </Link>
              <Link href="/terms" className="text-sm px-8 text-gray-600 hover:text-purple-600 transition-colors">
                {texts.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600" /> */}
     
    </footer>
  );
}; 

export default Footer;