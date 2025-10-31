// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Smartphone, Search, BarChart3, Shield } from 'lucide-react';

const screenshots = [{
  title: '首页概览',
  description: '一目了然查看所有谷子收藏',
  image: '/api/placeholder/300/600'
}, {
  title: '智能搜索',
  description: '多维度标签快速定位目标谷子',
  image: '/api/placeholder/300/600'
}, {
  title: '价值追踪',
  description: '实时记录谷子价值变化',
  image: '/api/placeholder/300/600'
}];
export function Showcase() {
  return <section id="showcase" className="py-20 bg-gradient-to-br from-[#92A8D1] to-[#F7CAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            功能展示
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            简洁优雅的界面设计，让谷子管理变得轻松愉快
          </p>
        </div>

        {/* 功能特点 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">智能搜索</h3>
            <p className="text-white/80 text-sm">3秒找到目标谷子</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">价值记录</h3>
            <p className="text-white/80 text-sm">实时追踪谷子价值</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">云端同步</h3>
            <p className="text-white/80 text-sm">多设备无缝同步</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">数据安全</h3>
            <p className="text-white/80 text-sm">多重备份永不丢失</p>
          </div>
        </div>

        {/* 设备展示区域已删除 */}
      </div>
    </section>;
}