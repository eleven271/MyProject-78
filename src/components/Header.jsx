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
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] bg-clip-text text-transparent">
              谷子收纳
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={scrollToTop} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              首页
            </button>
            <button onClick={scrollToAbout} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              项目背景
            </button>
            <button className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              功能特点
            </button>
            <button className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              联系我们
            </button>
          </div>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </header>;
}