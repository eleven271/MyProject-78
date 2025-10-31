// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Heart, Clock, Search, AlertCircle, CheckCircle, Star } from 'lucide-react';

const painPoints = [{
  icon: Clock,
  title: '预售等到天荒地老',
  description: '预售200天，等到我都忘了买过这个，找当初的订单好痛苦',
  color: 'text-red-400'
}, {
  icon: Search,
  title: '谷子找不到',
  description: '收藏了100+谷子，想找特定的那枚吧唧出来，翻箱倒柜半小时还没找到',
  color: 'text-yellow-400'
}, {
  icon: AlertCircle,
  title: '重复购买',
  description: '看到好看的柄图就冲动下单，结果收到发现已经买过同款，钱包在哭泣',
  color: 'text-orange-400'
}];
const solutions = [{
  icon: CheckCircle,
  title: '预售追踪',
  description: '自动记录预售信息，到货提醒，再也不错过补邮',
  color: 'text-green-400'
}, {
  icon: Search,
  title: '智能搜索',
  description: 'IP×角色×系列×柄图四维标签，3秒找到目标谷子',
  color: 'text-blue-400'
}, {
  icon: Star,
  title: '重复提醒',
  description: '录入时智能检测相似谷子，避免重复购买',
  color: 'text-purple-400'
}];
export function About() {
  return <section id="about" className="py-20 bg-gradient-to-br from-[#92A8D1] via-[#A3B5D8] to-[#F7CAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            为什么需要谷子珍藏家？
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            专为谷子收藏者打造的痛点解决方案
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 痛点 */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-2 text-red-400" />
              谷圈真实痛点
            </h3>
            <div className="space-y-6">
              {painPoints.map((point, index) => <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start">
                    <div className={`p-2 rounded-lg bg-white/20 mr-4 ${point.color}`}>
                      <point.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{point.title}</h4>
                      <p className="text-white/80">{point.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* 解决方案 */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
              我们的解决方案
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-start">
                    <div className={`p-2 rounded-lg bg-white/20 mr-4 ${solution.color}`}>
                      <solution.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{solution.title}</h4>
                      <p className="text-white/80">{solution.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              让每一枚谷子都有故事
            </h3>
            <p className="text-white/80 mb-6">
              从预售追踪到价值记录，从分类管理到社区分享，谷子珍藏家为您提供全方位的谷子管理体验
            </p>
            <button className="bg-white text-[#F7CAC9] px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-all">
              开始珍藏之旅
            </button>
          </div>
        </div>
      </div>
    </section>;
}