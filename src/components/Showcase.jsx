// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Smartphone, Monitor, Tablet } from 'lucide-react';

const showcaseItems = [{
  title: '精美卡片展示',
  description: '每一枚谷子都有专属卡片，高清图片+详细信息，展示效果堪比官方图鉴',
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80'
}, {
  title: '时间轴记录',
  description: '从入坑到资深谷圈人，完整记录你的收藏历程，每一枚谷子都有故事',
  image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&q=80'
}, {
  title: '价值追踪',
  description: '实时更新谷子市场价值，让你的收藏不仅好看还保值，投资收藏两不误',
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
}];
export function Showcase() {
  return <section id="showcase" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            精美展示
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            专业展示您的谷子珍藏
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}