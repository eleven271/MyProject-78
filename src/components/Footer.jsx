// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Github, Twitter, Instagram, Heart, Star } from 'lucide-react';

export function Footer() {
  return <footer className="bg-gradient-to-r from-[#F7CAC9] to-[#92A8D1] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="w-5 h-5 mr-2" />
              <h3 className="text-xl font-bold">谷子珍藏家</h3>
            </div>
            <p className="text-white/80">
              专为谷子收藏者打造的专业管理工具，让每一枚谷子都得到妥善珍藏
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">谷子管理</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">谷子录入</a></li>
              <li><a href="#" className="hover:text-white transition-colors">预售追踪</a></li>
              <li><a href="#" className="hover:text-white transition-colors">价值记录</a></li>
              <li><a href="#" className="hover:text-white transition-colors">展示分享</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">社区支持</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">谷子交流</a></li>
              <li><a href="#" className="hover:text-white transition-colors">交换市场</a></li>
              <li><a href="#" className="hover:text-white transition-colors">收藏指南</a></li>
              <li><a href="#" className="hover:text-white transition-colors">用户反馈</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">关注我们</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Star size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>&copy; 2024 谷子珍藏家. 为每一位谷子收藏者而生.</p>
        </div>
      </div>
    </footer>;
}