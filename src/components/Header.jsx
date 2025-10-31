// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const scrollToSection = sectionId => {
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] bg-clip-text text-transparent">
              谷子收纳
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              首页
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              关于
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              功能
            </button>
            <button onClick={() => scrollToSection('showcase')} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              展示
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#F7CAC9] transition-colors">
              联系
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-[#F7CAC9]">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#F7CAC9] transition-colors">
                首页
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#F7CAC9] transition-colors">
                关于
              </button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#F7CAC9] transition-colors">
                功能
              </button>
              <button onClick={() => scrollToSection('showcase')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#F7CAC9] transition-colors">
                展示
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#F7CAC9] transition-colors">
                联系
              </button>
            </div>
          </div>}
      </div>
    </header>;
}