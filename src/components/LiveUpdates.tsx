import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Users, Calendar, AlertCircle, TrendingUp } from 'lucide-react';

const LiveUpdates: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const updates = [
    {
      type: 'schedule',
      title: 'Next Class: Data Structures',
      subtitle: 'Room 301, CSE Block',
      time: '2:30 PM',
      status: 'upcoming',
      icon: Clock,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      type: 'event',
      title: 'Tech Fest 2024 Registration',
      subtitle: 'Last 3 days remaining',
      time: 'Deadline: Dec 15',
      status: 'urgent',
      icon: Calendar,
      color: 'text-orange-600 bg-orange-100'
    },
    {
      type: 'facility',
      title: 'Library Occupancy',
      subtitle: 'Currently 60% occupied',
      time: 'Updated now',
      status: 'moderate',
      icon: Users,
      color: 'text-green-600 bg-green-100'
    },
    {
      type: 'alert',
      title: 'Campus Maintenance',
      subtitle: 'Block A WiFi temporary down',
      time: '12:00 PM - 4:00 PM',
      status: 'alert',
      icon: AlertCircle,
      color: 'text-red-600 bg-red-100'
    }
  ];

  const facilityStatus = [
    { name: 'Main Library', occupancy: 60, status: 'moderate' },
    { name: 'Computer Lab 1', occupancy: 85, status: 'high' },
    { name: 'Canteen', occupancy: 35, status: 'low' },
    { name: 'Gym', occupancy: 70, status: 'moderate' }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Live Campus Updates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with real-time campus information, schedules, and facility status
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Updates Feed */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Recent Updates</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Live
                </div>
              </div>

              <div className="space-y-4">
                {updates.map((update, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-full ${update.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                      <update.icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{update.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{update.subtitle}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{update.time}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          update.status === 'urgent' ? 'bg-red-100 text-red-700' :
                          update.status === 'alert' ? 'bg-orange-100 text-orange-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {update.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Facility Status */}
          <div className="space-y-6">
            {/* Current Time Widget */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="text-blue-100">
                  {currentTime.toLocaleDateString([], { 
                    weekday: 'long', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </div>

            {/* Facility Occupancy */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Live Facility Status</h3>
              </div>

              <div className="space-y-4">
                {facilityStatus.map((facility, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{facility.name}</span>
                      <span className="text-sm text-gray-600">{facility.occupancy}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          facility.status === 'high' ? 'bg-red-500' :
                          facility.status === 'moderate' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${facility.occupancy}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Status: <span className={`font-medium ${
                        facility.status === 'high' ? 'text-red-600' :
                        facility.status === 'moderate' ? 'text-yellow-600' :
                        'text-green-600'
                      }`}>
                        {facility.status === 'high' ? 'Crowded' :
                         facility.status === 'moderate' ? 'Moderate' :
                         'Available'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveUpdates;