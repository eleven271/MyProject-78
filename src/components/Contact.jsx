// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Mail, Phone, MapPin, Send, Heart, Star } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    collection_size: '',
    message: ''
  });
  const handleSubmit = e => {
    e.preventDefault();
    alert('感谢您的留言！我们会尽快回复您。');
    setFormData({
      name: '',
      email: '',
      collection_size: '',
      message: ''
    });
  };
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-gradient-to-br from-[#F7CAC9] via-[#E8B4B3] to-[#92A8D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">联系我们</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            有任何谷子收藏的问题或建议？我们很乐意听取您的意见
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">谷子收藏者社区</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">官方邮箱</h4>
                  <p className="text-white/80">hello@guzi.app</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">QQ群</h4>
                  <p className="text-white/80">谷子珍藏家官方群：123456789</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">小红书</h4>
                  <p className="text-white/80">@谷子珍藏家官方</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">加入内测群</h4>
              <p className="text-white/80 text-sm mb-3">
                抢先体验新功能，与开发者直接交流，获得专属谷子管理建议
              </p>
              <button className="bg-white text-[#F7CAC9] px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-all">
                申请加入
              </button>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">留言咨询</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    谷子收藏家昵称
                  </label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-white/70" placeholder="请输入您的谷子圈昵称" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    联系邮箱
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-white/70" placeholder="请输入您的邮箱" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    收藏规模
                  </label>
                  <select name="collection_size" value={formData.collection_size} onChange={handleChange} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white">
                    <option value="" className="text-gray-700">请选择收藏规模</option>
                    <option value="1-50" className="text-gray-700">1-50枚</option>
                    <option value="51-200" className="text-gray-700">51-200枚</option>
                    <option value="201-500" className="text-gray-700">201-500枚</option>
                    <option value="500+" className="text-gray-700">500枚以上</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    留言内容
                  </label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-white/70" placeholder="请分享您的谷子收藏故事或遇到的问题" />
                </div>
                
                <button type="submit" className="w-full bg-white text-[#F7CAC9] py-3 rounded-lg font-medium hover:bg-white/90 transition-all flex items-center justify-center space-x-2">
                  <Send size={20} />
                  <span>发送留言</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
}