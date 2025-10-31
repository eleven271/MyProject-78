// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Database, BarChart3, Shield } from 'lucide-react';

export function About() {
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            项目背景
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            作为资深谷子收藏者，我们深知管理庞大收藏的痛苦：<br />
            信息分散、价值难追踪、预售易错过...<br />
            于是我们打造了这款专为谷子收藏者设计的管理工具
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#F7CAC9] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">智能分类管理</h3>
            <p className="text-gray-600">
              支持立牌、吧唧、亚克力等多品类管理<br />
              自定义标签系统，让收藏井井有条
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#92A8D1] rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">价值追踪记录</h3>
            <p className="text-gray-600">
              实时记录谷子价值变化<br />
              生成个人收藏资产报告
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#F7CAC9] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">数据安全保障</h3>
            <p className="text-gray-600">
              云端多重备份，永不丢失<br />
              支持数据导出，完全掌控
            </p>
          </div>
        </div>
      </div>
    </section>;
}