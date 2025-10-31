// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-[#F7CAC9] via-[#F4C2C1] to-[#92A8D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            珍藏每一枚
            <span className="text-white/90">谷子的故事</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            专为谷子收藏者设计的专业管理工具，支持徽章、立牌、吧唧等多品类管理，预售追踪，价值记录，让您的珍藏井井有条
          </p>
          
          <div className="flex justify-center">
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition-all">
              了解更多
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <ArrowDown className="w-8 h-8 text-white/60 mx-auto animate-bounce" />
        </div>
      </div>
    </section>;
}