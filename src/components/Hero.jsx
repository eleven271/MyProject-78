// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F7CAC9] via-[#F4C2C1] to-[#92A8D1]">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7CAC9]/20 via-[#F4C2C1]/20 to-[#92A8D1]/20" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            珍藏每一枚
            <br />
            <span className="text-white/90">谷子的故事</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            专为谷子收藏者设计的专业管理工具<br />
            支持立牌、吧唧等多品类管理，预售追踪，价值记录<br />
            让您的珍藏井井有条
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
            立即体验
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="bg-white text-[#F7CAC9] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
            了解更多
          </button>
        </div>

        {/* 装饰元素 */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      </div>
    </section>;
}