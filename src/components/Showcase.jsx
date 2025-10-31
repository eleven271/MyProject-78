// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Smartphone, Tablet, Monitor, TrendingUp, PieChart, Eye } from 'lucide-react';

const screenshots = [{
  device: '手机端',
  icon: Smartphone,
  description: '随时随地的谷子管理',
  features: ['拍照识别', '预售提醒', '社区分享']
}, {
  device: '平板端',
  icon: Tablet,
  description: '大屏浏览收藏柜',
  features: ['虚拟展示柜', '3D浏览', '批量管理']
}, {
  device: '网页端',
  icon: Monitor,
  description: '专业数据分析',
  features: ['价值追踪', '趋势分析', '报表导出']
}];
const stats = [{
  title: '收藏分布',
  icon: PieChart,
  data: '徽章 45% | 立牌 30% | 吧唧 25%'
}, {
  title: '价值增长',
  icon: TrendingUp,
  data: '平均增值 120% | 稀有谷子 300%'
}, {
  title: '预售管理',
  icon: Eye,
  data: '追踪中 15个 | 本月到货 8个'
}];
export function Showcase() {
  return <section id="showcase" className="py-20 bg-gradient-to-br from-[#92A8D1] via-[#A3B5D8] to-[#F7CAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">谷子珍藏展示</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            跨平台一致体验，专业展示您的谷子珍藏
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {screenshots.map((item, index) => <div key={index} className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-4">
                <div className="bg-white/30 rounded-lg shadow-lg p-4">
                  <div className="aspect-[3/4] bg-white/20 rounded flex items-center justify-center">
                    <item.icon size={48} className="text-white/60" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.device}</h3>
              <p className="text-white/80 mb-3">{item.description}</p>
              <div className="text-sm text-white/70">
                {item.features.map((feature, idx) => <span key={idx}>
                    {feature}
                    {idx < item.features.length - 1 && ' · '}
                  </span>)}
              </div>
            </div>)}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
              <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">{stat.title}</h3>
              <p className="text-white/80 text-sm">{stat.data}</p>
            </div>)}
        </div>
        
        <div className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">更多谷子珍藏功能</h3>
            <p className="text-white/80 mb-6">
              从谷子录入到价值追踪，从个人珍藏到社区分享，谷子珍藏家为您提供全方位的谷子管理解决方案
            </p>
            <button className="bg-white text-[#F7CAC9] px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-all">
              立即体验
            </button>
          </div>
        </div>
      </div>
    </section>;
}