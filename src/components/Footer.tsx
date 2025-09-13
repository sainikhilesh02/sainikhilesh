import React from 'react';
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">IC</span>
              </div>
              <span className="text-xl font-bold">Intelligent Campus</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolutionizing campus life with AI-powered intelligent information systems for modern universities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Campus Map</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Faculty Directory</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Assistant</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Live Updates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Transport Tracking</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              support@intelligentcampus.edu
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Intelligent Campus. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for AI-thon 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;