import React from 'react';
import { MessageCircle, Zap, Shield, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by Advanced AI</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Your Smart Campus
            <span className="block">Assistant</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the future of campus life with our AI-powered intelligent information system. 
            Get instant answers, real-time updates, and personalized assistance 24/7.
          </p>

          {/* Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Start Exploring
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-gray-800 mb-2">AI Chat Assistant</h3>
              <p className="text-sm text-gray-600">Get instant answers to all campus-related queries</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300">
              <Globe className="w-8 h-8 text-purple-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-gray-800 mb-2">Live Campus Updates</h3>
              <p className="text-sm text-gray-600">Real-time information about facilities and events</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300">
              <Shield className="w-8 h-8 text-green-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-gray-800 mb-2">Smart Services</h3>
              <p className="text-sm text-gray-600">Comprehensive campus services at your fingertips</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;