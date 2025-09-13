import React from 'react';
import { 
  Navigation, 
  Database, 
  Calendar, 
  MessageCircle, 
  Bell, 
  AlertTriangle, 
  Search, 
  ClipboardCheck 
} from 'lucide-react';

const QuickAccess: React.FC = () => {
  const services = [
    {
      icon: Navigation,
      title: 'Smart Campus Navigation',
      description: 'AI-powered navigation with live facility status',
      color: 'from-blue-500 to-cyan-500',
      status: 'Active'
    },
    {
      icon: Database,
      title: 'Unified Information Portal',
      description: 'Centralized access to all campus information',
      color: 'from-purple-500 to-pink-500',
      status: 'Live'
    },
    {
      icon: Calendar,
      title: 'Event & Club Management',
      description: 'Discover and manage campus events and activities',
      color: 'from-green-500 to-emerald-500',
      status: 'Updated'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbot Assistant',
      description: 'Intelligent assistant for instant query resolution',
      color: 'from-orange-500 to-red-500',
      status: 'Online'
    },
    {
      icon: Bell,
      title: 'Personalized Notifications',
      description: 'Smart reminders and personalized alerts',
      color: 'from-teal-500 to-blue-500',
      status: 'Active'
    },
    {
      icon: AlertTriangle,
      title: 'Smart Complaint System',
      description: 'Efficient complaint tracking and resolution',
      color: 'from-yellow-500 to-orange-500',
      status: 'Available'
    },
    {
      icon: Search,
      title: 'Lost & Found with AI',
      description: 'AI image matching for lost item recovery',
      color: 'from-indigo-500 to-purple-500',
      status: 'Beta'
    },
    {
      icon: ClipboardCheck,
      title: 'Attendance & Feedback',
      description: 'Integrated attendance tracking and feedback system',
      color: 'from-pink-500 to-rose-500',
      status: 'Live'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Quick Access Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access all essential campus services instantly with our intelligent quick access panel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                  {service.status}
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                <span>Access Service</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;