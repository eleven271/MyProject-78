// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Smartphone, Tablet, Monitor, TrendingUp, PieChart, Eye, Grid3X3, BarChart3, Package } from 'lucide-react';

const screenshots = [{
  device: '手机端',
  icon: Smartphone,
  description: '随时随地的谷子管理',
  features: ['拍照识别', '预售提醒', '社区分享'],
  preview: 'mobile'
}, {
  device: '平板端',
  icon: Tablet,
  description: '大屏浏览收藏柜',
  features: ['虚拟展示柜', '3D浏览', '批量管理'],
  preview: 'tablet'
}, {
  device: '网页端',
  icon: Monitor,
  description: '专业数据分析',
  features: ['价值追踪', '趋势分析', '报表导出'],
  preview: 'web'
}];
const interfaceExamples = [{
  title: '分类列表',
  icon: Grid3X3,
  description: 'IP×角色×系列四维分类，想找什么3秒搞定',
  features: ['智能标签', '快速筛选', '状态管理'],
  color: 'from-[#F7CAC9] to-[#E8B4B3]'
}, {
  title: '统计图表',
  icon: BarChart3,
  description: '谷子资产一目了然，升值快乐报表天天看',
  features: ['资产统计', '价值追踪', '趋势分析'],
  color: 'from-[#92A8D1] to-[#A3B5D8]'
}, {
  title: '物品详情',
  icon: Package,
  description: '每枚谷子的专属档案，记录购买故事',
  features: ['详细信息', '购买记录', '市场价值'],
  color: 'from-[#E8B4B3] to-[#92A8D1]'
}];
const stats = [{
  title: '收藏分布',
  icon: PieChart,
  data: '徽章 45% | 立牌 30% | 吧唧 25%',
  color: 'bg-white/20'
}, {
  title: '价值增长',
  icon: TrendingUp,
  data: '平均增值 120% | 稀有谷子 300%',
  color: 'bg-white/20'
}, {
  title: '预售管理',
  icon: Eye,
  data: '追踪中 15个 | 本月到货 8个',
  color: 'bg-white/20'
}];

// 界面预览组件
function InterfacePreview({
  type,
  title,
  features
}) {
  const getPreviewContent = () => {
    switch (type) {
      case 'list':
        return <div className="space-y-2">
            <div className="bg-white/20 rounded p-2 text-xs">咒术回战</div>
            <div className="bg-white/20 rounded p-2 text-xs">五条悟生日吧唧</div>
            <div className="bg-white/20 rounded p-2 text-xs">状态：已到货</div>
          </div>;
      case 'chart':
        return <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>徽章</span>
              <span>45%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="bg-white/60 h-2 rounded-full" style={{
              width: '45%'
            }}></div>
            </div>
            <div className="flex justify-between text-xs">
              <span>立牌</span>
              <span>30%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="bg-white/60 h-2 rounded-full" style={{
              width: '30%'
            }}></div>
            </div>
          </div>;
      case 'detail':
        return <div className="space-y-2 text-xs">
            <div className="bg-white/20 rounded p-2">购买价：¥50</div>
            <div className="bg-white/20 rounded p-2">市场价：¥300</div>
            <div className="bg-white/20 rounded p-2">涨幅：+500%</div>
          </div>;
      default:
        return null;
    }
  };
  return <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all">
      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${interfaceExamples.find(e => e.title === title)?.color || 'from-white/20 to-white/30'} text-white mb-4`}>
        {React.createElement(icon, {
        size: 24
      })}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm mb-3">{description}</p>
      
      {/* 界面预览 */}
      <div className="bg-white/10 rounded-lg p-3 mb-3">
        {getPreviewContent()}
      </div>
      
      <div className="flex flex-wrap gap-1">
        {features.map((feature, idx) => <span key={idx} className="bg-white/20 text-white/90 px-2 py-1 rounded text-xs">
            {feature}
          </span>)}
      </div>
    </div>;
}
export function Showcase() {
  return <section id="showcase" className="py-20 bg-gradient-to-br from-[#92A8D1] via-[#A3B5D8] to-[#F7CAC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">谷子珍藏展示</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            跨平台一致体验，专业展示您的谷子珍藏
          </p>
        </div>
        
        {/* 设备展示 */}
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

        {/* 界面示例 */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">界面预览</h3>
            <p className="text-white/80">真实谷子管理场景，所见即所得</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {interfaceExamples.map((item, index) => <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} text-white mb-4`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm mb-3">{item.description}</p>
                
                {/* 界面预览 */}
                <div className="bg-white/10 rounded-lg p-3 mb-3">
                  {item.title === '分类列表' && <div className="space-y-2">
                      <div className="bg-white/20 rounded p-2 text-xs flex justify-between">
                        <span>咒术回战</span>
                        <span className="text-white/70">12枚</span>
                      </div>
                      <div className="bg-white/20 rounded p-2 text-xs flex justify-between">
                        <span>五条悟生日吧唧</span>
                        <span className="text-green-300 text-xs">已到货</span>
                      </div>
                      <div className="bg-white/20 rounded p-2 text-xs flex justify-between">
                        <span>夏油杰立牌</span>
                        <span className="text-yellow-300 text-xs">预售中</span>
                      </div>
                    </div>}
                  
                  {item.title === '统计图表' && <div className="space-y-2">
                      <div className="text-xs text-white/80 mb-2">谷子分布</div>
                      <div className="flex justify-between text-xs">
                        <span>徽章</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#F7CAC9] to-[#E8B4B3] h-2 rounded-full" style={{
                    width: '45%'
                  }}></div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>立牌</span>
                        <span>30%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#92A8D1] to-[#A3B5D8] h-2 rounded-full" style={{
                    width: '30%'
                  }}></div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>吧唧</span>
                        <span>25%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#E8B4B3] to-[#92A8D1] h-2 rounded-full" style={{
                    width: '25%'
                  }}></div>
                      </div>
                    </div>}
                  
                  {item.title === '物品详情' && <div className="space-y-2">
                      <div className="bg-white/20 rounded p-2 text-xs">
                        <div className="font-semibold text-white">五条悟生日吧唧</div>
                        <div className="text-white/70 text-xs mt-1">咒术回战·生日系列</div>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <div className="bg-white/20 rounded p-2">
                          <div className="text-white/70">购买价</div>
                          <div className="text-white font-semibold">¥50</div>
                        </div>
                        <div className="bg-white/20 rounded p-2">
                          <div className="text-white/70">市场价</div>
                          <div className="text-white font-semibold">¥300</div>
                        </div>
                      </div>
                      <div className="bg-green-300/20 rounded p-2 text-center">
                        <div className="text-green-200 text-xs">已升值 +500%</div>
                      </div>
                    </div>}
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {item.features.map((feature, idx) => <span key={idx} className="bg-white/20 text-white/90 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>)}
                </div>
              </div>)}
          </div>
        </div>

        {/* 数据统计 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => <div key={index} className={`${stat.color} backdrop-blur-sm rounded-xl p-6 text-center`}>
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