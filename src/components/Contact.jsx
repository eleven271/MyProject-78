// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Mail, MessageCircle, Heart } from 'lucide-react';

export function Contact() {
  return <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 底部信息栏 */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-5 h-5 text-[#F7CAC9] mr-2" />
            <span className="text-gray-600">谷子珍藏家 · 让每一枚谷子都有故事</span>
          </div>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>© 2024 谷子珍藏家</span>
            <span>·</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </section>;
}