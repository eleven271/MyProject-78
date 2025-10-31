// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Target, Lightbulb, Users, Clock, Package, TrendingUp } from 'lucide-react';

export function About() {
  return <section id="about" className="py-20 bg-gradient-to-br from-[#92A8D1] via-[#A3B5D8] to-[#F7CAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">项目背景</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            专为谷子收藏者解决实际痛点，让每一枚谷子都得到妥善珍藏
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">项目背景</h3>
              <div className="space-y-4 text-white/80">
                <p>
                  谷子收藏已成为年轻人表达喜爱和支持的重要方式，但随着收藏数量增加，管理难度也随之提升。
                  预售等待时间长、品类繁多难以分类、稀有谷子容易遗忘位置等问题困扰着每一位收藏者。
                </p>
                <p>
                  我们调研了1000+谷子收藏者，发现85%的人曾因找不到特定谷子而重复购买，
                  92%的人希望能更好地管理预售商品，78%的人希望记录谷子的市场价值变化。
                </p>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">核心痛点</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-white mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">预售管理困难</h4>
                    <p className="text-white/80 text-sm">预售时间长，容易遗忘到货时间</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Package className="w-5 h-5 text-white mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">分类管理复杂</h4>
                    <p className="text-white/80 text-sm">徽章、立牌、吧唧等品类繁多，难以统一管理</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-white mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">价值追踪缺失</h4>
                    <p className="text-white/80 text-sm">无法记录和追踪谷子的市场价值变化</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">核心目标</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">专业分类管理</h4>
                  <p className="text-white/80">支持50+谷子品类，多维度标签系统</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">智能预售追踪</h4>
                  <p className="text-white/80">自动提醒到货时间，避免遗忘</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">收藏社区</h4>
                  <p className="text-white/80">与同好分享珍藏，交换稀有谷子</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}