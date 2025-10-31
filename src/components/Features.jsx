// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Camera, Search, Clock, BarChart3, Share2, Shield, Tag, Star, Calendar } from 'lucide-react';

const features = [{
  icon: Camera,
  title: '智能拍照识别',
  description: '拍照自动识别谷子类型、系列、角色，支持徽章、立牌、吧唧等50+品类',
  color: 'bg-white/20 text-white'
}, {
  icon: Tag,
  title: '多维度分类',
  description: '按IP、角色、系列、购买渠道、稀有度等多标签分类，快速定位',
  color: 'bg-white/20 text-white'
}, {
  icon: Calendar,
  title: '预售追踪',
  description: '预售倒计时提醒，到货通知，避免错过心爱的谷子',
  color: 'bg-white/20 text-white'
}, {
  icon: Star,
  title: '价值记录',
  description: '记录购买价格，追踪市场价值变化，生成收藏资产报告',
  color: 'bg-white/20 text-white'
}, {
  icon: BarChart3,
  title: '收藏统计',
  description: '可视化展示收藏分布，了解收藏偏好和投资趋势',
  color: 'bg-white/20 text-white'
}, {
  icon: Share2,
  title: '社区分享',
  description: '展示收藏柜，与同好交换稀有谷子，发现更多好物',
  color: 'bg-white/20 text-white'
}];
export function Features() {
  return <section id="features" className="py-20 bg-gradient-to-br from-[#F7CAC9] via-[#E8B4B3] to-[#92A8D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">谷子珍藏核心功能</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            专为谷子收藏者设计的六大核心功能，让每一枚谷子都得到专业管理
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all">
              <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}