import React from 'react';
import { 
  Map, 
  Shield, 
  Globe, 
  Users, 
  BookOpen, 
  Video, 
  Bus, 
  UserCheck, 
  CreditCard 
} from 'lucide-react';

const IntelligentServices: React.FC = () => {
  const services = [
    {
      icon: Map,
      title: 'Live Campus Map',
      description: 'Interactive map with real-time facility status, crowd levels, and occupancy data',
      features: ['Library status', 'Lab availability', 'Canteen crowd levels', 'Parking spaces'],
      color: 'from-blue-500 to-cyan-500',
      status: 'Live'
    },
    {
      icon: Shield,
      title: 'Emergency & Safety',
      description: 'Comprehensive safety system with emergency protocols and exit routes',
      features: ['Emergency contacts', 'Safety exits', 'Alert system', 'Location tracking'],
      color: 'from-red-500 to-pink-500',
      status: 'Active'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Access campus information in multiple languages with AI translation',
      features: ['10+ languages', 'Real-time translation', 'Voice support', 'Cultural context'],
      color: 'from-green-500 to-emerald-500',
      status: 'Available'
    },
    {
      icon: Users,
      title: 'Peer-to-Peer Help',
      description: 'Connect with fellow students for academic support and doubt clearing',
      features: ['Study groups', 'Doubt clearing', 'Peer mentoring', 'Subject forums'],
      color: 'from-purple-500 to-indigo-500',
      status: 'Online'
    },
    {
      icon: BookOpen,
      title: 'AI Study Planner',
      description: 'Personalized study schedules and academic planning with AI insights',
      features: ['Smart scheduling', 'Progress tracking', 'Goal setting', 'Performance analytics'],
      color: 'from-orange-500 to-red-500',
      status: 'Beta'
    },
    {
      icon: Video,
      title: 'Virtual Faculty Connect',
      description: 'Direct communication channel with faculty members and staff',
      features: ['Video consultations', 'Appointment booking', 'Office hours', 'Academic guidance'],
      color: 'from-teal-500 to-blue-500',
      status: 'Live'
    },
    {
      icon: Bus,
      title: 'Smart Transport Tracking',
      description: 'Real-time campus shuttle and transport tracking system',
      features: ['Live bus tracking', 'Route planning', 'ETA predictions', 'Seat availability'],
      color: 'from-yellow-500 to-orange-500',
      status: 'Active'
    },
    {
      icon: UserCheck,
      title: 'Student Connect',
      description: 'Social platform for campus community building and networking',
      features: ['Student profiles', 'Interest groups', 'Event networking', 'Collaboration tools'],
      color: 'from-pink-500 to-purple-500',
      status: 'Live'
    },
    {
      icon: CreditCard,
      title: 'Student ID Integration',
      description: 'Unified digital student ID for seamless campus services access',
      features: ['Digital wallet', 'Access control', 'Payment integration', 'Service authentication'],
      color: 'from-indigo-500 to-blue-500',
      status: 'Available'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Intelligent Campus Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience next-generation campus life with our comprehensive suite of AI-powered intelligent services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  service.status === 'Live' ? 'bg-green-100 text-green-700' :
                  service.status === 'Active' ? 'bg-blue-100 text-blue-700' :
                  service.status === 'Beta' ? 'bg-purple-100 text-purple-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {service.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="w-full py-3 bg-gray-50 text-gray-700 rounded-lg font-medium hover:bg-gray-100 group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-200">
                Explore Service
              </button>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Powered by Advanced AI</h3>
            <p className="text-blue-100">Real-time analytics and intelligent insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Daily Queries Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">System Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Languages Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">AI Assistant Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentServices;