// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ArrowDown, Camera, Heart } from 'lucide-react';

export function Hero() {
  return <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-[#F7CAC9] via-[#F4C2C1] to-[#92A8D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart size={16} />
            <span>专为谷子收藏者打造</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            珍藏每一枚
            <span className="text-white/90">谷子的故事</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            专为谷子收藏者设计的专业管理工具，支持徽章、立牌、吧唧等多品类管理，预售追踪，价值记录，让您的珍藏井井有条
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#F7CAC9] px-8 py-3 rounded-lg text-lg font-medium hover:bg-white/90 transition-all shadow-lg">
              <Camera size={20} className="inline mr-2" />
              开始珍藏
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition-all">
              了解更多
            </button>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-white/80">谷子品类</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-white/80">收藏者</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-white/80">满意度</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <ArrowDown className="w-8 h-8 text-white/60 mx-auto animate-bounce" />
        </div>
      </div>
    </section>;
}