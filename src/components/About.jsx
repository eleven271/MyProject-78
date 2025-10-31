// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Search, BarChart3, Shield, Sparkles } from 'lucide-react';

const problems = [{
  title: '收藏混乱',
  description: '谷子种类多、数量大，难以系统管理'
}, {
  title: '价值难追踪',
  description: '无法实时掌握谷子市场价值变化'
}, {
  title: '信息分散',
  description: '谷子信息分散在各处，查找困难'
}];
const solutions = [{
  icon: Search,
  color: 'text-blue-500',
  title: '智能分类',
  description: 'AI 自动识别谷子类型，一键完成分类整理'
}, {
  icon: Shield,
  color: 'text-green-500',
  title: '云端同步',
  description: '多设备实时同步，数据永不丢失'
}];
export function About() {
  return <section className="py-20 bg-gradient-to-br from-white to-[#F7CAC9]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            为什么选择我们
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            专为谷子收藏者量身打造，解决收藏管理中的每一个痛点
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧：问题 */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              收藏者的困扰
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-[#F7CAC9] rounded-full mt-2 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{problem.title}</h4>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* 右侧：解决方案 */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              我们的解决方案
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start">
                    <div className={`p-2 rounded-lg bg-white/20 mr-4 ${solution.color}`}>
                      <solution.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{solution.title}</h4>
                      <p className="text-gray-600 text-sm">{solution.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}