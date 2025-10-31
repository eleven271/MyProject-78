// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Menu, X, Download, Sparkles } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Sparkles className="w-6 h-6 text-[#F7CAC9] mr-2" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] bg-clip-text text-transparent">谷子珍藏家</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              首页
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              项目背景
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              核心功能
            </button>
            <button onClick={() => scrollToSection('showcase')} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              收藏展示
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              联系我们
            </button>
          </nav>

          <button onClick={() => scrollToSection('contact')} className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
            <Download size={20} />
            <span>开始珍藏</span>
          </button>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#F7CAC9]">首页</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#F7CAC9]">项目背景</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-[#F7CAC9]">核心功能</button>
              <button onClick={() => scrollToSection('showcase')} className="text-gray-700 hover:text-[#F7CAC9]">收藏展示</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#F7CAC9]">联系我们</button>
            </nav>
          </div>}
      </div>
    </header>;
}