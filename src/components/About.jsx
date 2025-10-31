// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Target, Lightbulb, Users, Clock, Package, TrendingUp, Heart, Search, AlertCircle, Gift } from 'lucide-react';

export function About() {
  return <section id="about" className="py-20 bg-gradient-to-br from-[#92A8D1] via-[#A3B5D8] to-[#F7CAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">为什么做谷子珍藏家？</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            因为我们也是谷圈人，太懂找不到谷子的心痛了！
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                我们的谷子血泪史
              </h3>
              <div className="space-y-4 text-white/80">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <p>
                    <strong className="text-white">预售等到天荒地老：</strong>
                    吧唧预售6个月，等到我都忘了买过这个，结果错过补邮直接砍单，心在滴血！
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Search className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <p>
                    <strong className="text-white">谷子太多找不到：</strong>
                    收藏了200+枚吧唧，想找某套海景，翻箱倒柜半小时，最后发现被压在最底下...
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Gift className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <p>
                    <strong className="text-white">重复购买浪费钱：</strong>
                    看到好看的吧唧就冲，回家发现已经买过同款不同柄，钱包在哭泣！
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <p>
                    <strong className="text-white">价值变化没记录：</strong>
                    当年50块收的谷子现在涨到300，但是完全记不清什么时候买的多少钱...
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Package className="w-6 h-6 mr-2" />
                谷圈真实调研数据
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">89%</div>
                  <div className="text-white/80 text-sm">谷人找不到谷子</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">76%</div>
                  <div className="text-white/80 text-sm">错过预售补邮</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">65%</div>
                  <div className="text-white/80 text-sm">重复购买同款</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">92%</div>
                  <div className="text-white/80 text-sm">想要管理工具</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2" />
              我们的解决方案
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">预售小助手</h4>
                  <p className="text-white/80 text-sm">
                    设置预售提醒，到货前3天、1天、当天三次提醒，再也不怕错过补邮！支持批量导入淘宝、微店预售订单。
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">智能分类神器</h4>
                  <p className="text-white/80 text-sm">
                    拍照自动识别谷子类型，支持"IP+角色+系列+柄图"四维标签，想找"咒术回战五条悟生日吧唧"，3秒搞定！
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">重复购买预警</h4>
                  <p className="text-white/80 text-sm">
                    录入时自动检测相似谷子，提醒"您已收藏过类似柄图"，支持按角色、系列去重，省钱又省心！
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">谷子身价追踪</h4>
                  <p className="text-white/80 text-sm">
                    记录购买价格，自动追踪闲鱼、超话市场价，生成"我的谷子升值了"快乐报表，海景涨幅一目了然！
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">谷圈同好社区</h4>
                  <p className="text-white/80 text-sm">
                    展示你的珍藏柜，和同好交换稀有谷子，发现隐藏宝藏，让收藏不再孤单！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">技术实现策略</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-white mb-2">前端：Vue3 + 玫瑰石英主题</h4>
                <p className="text-white/80 text-sm">
                  响应式设计，支持手机、平板、电脑多端使用，拍照识别谷子类型，手势操作更顺手
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">后端：Java Spring Boot</h4>
                <p className="text-white/80 text-sm">
                  高性能处理谷子数据，支持百万级谷子管理，实时价格追踪，稳定可靠
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">数据库：MySQL + Redis</h4>
                <p className="text-white/80 text-sm">
                  谷子信息永久保存，支持复杂查询和统计，缓存热门数据，查询速度飞快
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">AI识别：谷子专用模型</h4>
                <p className="text-white/80 text-sm">
                  训练专用谷子识别模型，支持徽章、立牌、吧唧等50+品类，识别准确率95%+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}