// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Menu } from 'lucide-react';

export function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-[#F7CAC9]">谷子收纳</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={scrollToTop} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              首页
            </button>
            <a href="#features" className="text-gray-700 hover:text-[#F7CAC9] transition-colors">功能</a>
            <a href="#showcase" className="text-gray-700 hover:text-[#F7CAC9] transition-colors">展示</a>
            <a href="#contact" className="text-gray-700 hover:text-[#F7CAC9] transition-colors">联系我们</a>
          </div>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>;
}