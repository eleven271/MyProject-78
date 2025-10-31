// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Layers, BarChart3, Zap, Tag, Eye, Filter, Grid3X3, TrendingUp, Edit3, Camera } from 'lucide-react';

const features = [
// 多维度分类
{
  icon: Layers,
  title: '多维度分类',
  description: 'IP×角色×系列×柄图四维标签，想找"咒术回战五条悟生日吧唧"3秒搞定！支持自定义标签，海景谷单独标记。',
  color: 'bg-white/20 text-white',
  tags: ['IP分类', '角色管理', '系列整理', '柄图识别']
}, {
  icon: Tag,
  title: '智能标签系统',
  description: '拍照自动识别谷子类型，徽章/立牌/吧唧/镭射票一键分类。稀有度自动标记，海景谷重点提醒。',
  color: 'bg-white/20 text-white',
  tags: ['拍照识别', '自动分类', '稀有度标记', '海景提醒']
}, {
  icon: Filter,
  title: '高级筛选',
  description: '支持"未到货+咒术回战+五条悟+生日系列"组合筛选，复杂条件也能秒速定位。收藏状态实时更新。',
  color: 'bg-white/20 text-white',
  tags: ['组合筛选', '状态追踪', '到货提醒', '预售管理']
},
// 可视化统计
{
  icon: BarChart3,
  title: '谷子资产报表',
  description: '生成"我的谷子升值了"快乐报表！按IP、角色、系列统计数量和总价值，海景涨幅一目了然。',
  color: 'bg-white/20 text-white',
  tags: ['资产统计', '价值追踪', '涨幅分析', '投资报告']
}, {
  icon: TrendingUp,
  title: '市场价值追踪',
  description: '自动追踪闲鱼、超话市场价，记录每枚谷子的身价变化。50块收的谷子涨到300，成就感爆棚！',
  color: 'bg-white/20 text-white',
  tags: ['价格追踪', '市场监控', '升值提醒', '投资参考']
}, {
  icon: Eye,
  title: '虚拟展示柜',
  description: '3D虚拟谷子墙，按系列/角色展示珍藏。支持分享截图到超话，谷圈炫耀神器！',
  color: 'bg-white/20 text-white',
  tags: ['3D展示', '虚拟墙', '分享炫耀', '社区互动']
},
// 便捷操作
{
  icon: Zap,
  title: '一键录入',
  description: '拍照+扫码双录入，淘宝订单一键导入。预售商品自动创建，到货自动更新状态，懒人福音！',
  color: 'bg-white/20 text-white',
  tags: ['拍照录入', '扫码添加', '订单导入', '自动更新']
}, {
  icon: Edit3,
  title: '批量管理',
  description: '支持批量编辑标签、更新状态、调整分类。100枚谷子5分钟搞定，效率提升10倍！',
  color: 'bg-white/20 text-white',
  tags: ['批量编辑', '快速操作', '效率提升', '时间管理']
}, {
  icon: Camera,
  title: '重复购买预警',
  description: '录入时智能检测相似谷子，提醒"已收藏过类似柄图"。按角色+系列去重，省钱又省心！',
  color: 'bg-white/20 text-white',
  tags: ['重复检测', '智能提醒', '省钱助手', '避免浪费']
}];
export function Features() {
  return <section id="features" className="py-20 bg-gradient-to-br from-[#F7CAC9] via-[#E8B4B3] to-[#92A8D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">谷子珍藏三大核心功能</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            专为谷子收藏者量身打造，解决实际痛点，让每一枚谷子都得到专业管理
          </p>
        </div>
        
        {/* 功能分类标题 */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2"> 多维度分类</h3>
            <p className="text-white/80">IP×角色×系列×柄图四维管理，想找什么3秒搞定</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.slice(0, 3).map((feature, index) => <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all">
                <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 text-sm mb-3">{feature.description}</p>
                <div className="flex flex-wrap gap-1">
                  {feature.tags.map((tag, idx) => <span key={idx} className="bg-white/20 text-white/90 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>)}
                </div>
              </div>)}
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2"> 可视化统计</h3>
            <p className="text-white/80">谷子资产一目了然，升值快乐报表天天看</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.slice(3, 6).map((feature, index) => <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all">
                <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 text-sm mb-3">{feature.description}</p>
                <div className="flex flex-wrap gap-1">
                  {feature.tags.map((tag, idx) => <span key={idx} className="bg-white/20 text-white/90 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>)}
                </div>
              </div>)}
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2"> 便捷操作</h3>
            <p className="text-white/80">拍照扫码一键录入，批量管理效率提升10倍</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.slice(6, 9).map((feature, index) => <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 hover:bg-white/30 transition-all">
                <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 text-sm mb-3">{feature.description}</p>
                <div className="flex flex-wrap gap-1">
                  {feature.tags.map((tag, idx) => <span key={idx} className="bg-white/20 text-white/90 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>)}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}