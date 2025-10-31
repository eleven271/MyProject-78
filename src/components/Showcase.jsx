// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Smartphone, Tablet, Monitor, Camera, Bell, Share2, Eye, Package, TrendingUp, Download } from 'lucide-react';

export function Showcase() {
  return <section id="showcase" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            界面预览
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            精美直观的谷子管理界面，让收藏管理成为一种享受
          </p>
        </div>

        {/* 界面预览 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">更多谷子收藏功能</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F7CAC9] to-[#92A8D1] rounded-lg flex items-center justify-center mr-4">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">拍照识别</h4>
                  <p className="text-gray-600">AI识别谷子信息，自动录入</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F7CAC9] to-[#92A8D1] rounded-lg flex items-center justify-center mr-4">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">预售提醒</h4>
                  <p className="text-gray-600">重要预售节点及时提醒</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F7CAC9] to-[#92A8D1] rounded-lg flex items-center justify-center mr-4">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">虚拟展示柜</h4>
                  <p className="text-gray-600">3D展示您的珍贵收藏</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F7CAC9] to-[#92A8D1] rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">价值追踪</h4>
                  <p className="text-gray-600">实时追踪谷子市场价值</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="bg-gradient-to-br from-[#F7CAC9]/20 to-[#92A8D1]/20 rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">我的谷子收藏</h3>
                  <span className="text-sm text-gray-500">128枚</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="aspect-square bg-white rounded-lg shadow-sm" />)}
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}