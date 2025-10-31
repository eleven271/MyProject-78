// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Search, BarChart3, Shield } from 'lucide-react';

const features = [{
  icon: Search,
  title: '多维度分类',
  description: '物品名×状态×角色×类别×购买渠道多标签\n想找"qy 叠叠乐" 3秒搞定！',
  tags: ['IP分类', '系列整理']
}, {
  icon: BarChart3,
  title: '价值记录',
  description: '实时记录谷子价值变化，收藏投资两不误',
  tags: ['价格追踪', '价值分析']
}, {
  icon: Shield,
  title: '数据安全',
  description: '云端同步，多重备份，珍贵收藏永不丢失',
  tags: ['云端同步', '多重备份']
}];
export function Features() {
  return <section id="features" className="py-20 bg-gradient-to-br from-[#F7CAC9] via-[#F4C2C1] to-[#92A8D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            核心功能
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            专为谷子收藏者量身打造的核心功能
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => <div key={index} className="group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 bg-white/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-white/80 mb-4 text-sm whitespace-pre-line">
                  {feature.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {feature.tags.map((tag, tagIndex) => <span key={tagIndex} className="px-2 py-1 bg-white/20 text-white rounded-full text-xs">
                      {tag}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}