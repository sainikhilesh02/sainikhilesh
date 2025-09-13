import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Mic, Paperclip } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI Campus Assistant. I can help you with campus information, schedules, facilities, and much more. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('library')) {
      return "📚 The main library is currently 60% occupied. It's open from 8:00 AM to 10:00 PM today. The study halls on the second floor have the most available seats right now. Would you like me to check specific book availability or reserve a study room?";
    }
    
    if (input.includes('canteen') || input.includes('food')) {
      return "🍽️ The main canteen is currently 35% occupied - perfect time to grab a meal! Today's special is Chicken Biryani. The cafe in Block B also has lighter snacks. Meal timings: Breakfast 8-10 AM, Lunch 12-2 PM, Dinner 6-8 PM.";
    }
    
    if (input.includes('schedule') || input.includes('class') || input.includes('timetable')) {
      return "📅 Your next class is Data Structures at 2:30 PM in Room 301, CSE Block. After that, you have Database Management at 4:00 PM in Room 205. Would you like me to show your complete schedule or set reminders?";
    }
    
    if (input.includes('lab') || input.includes('computer')) {
      return "💻 Computer Lab 1 is currently 85% occupied (busy), Computer Lab 2 is 40% occupied (available), and the AI/ML Lab is 20% occupied (mostly available). Which lab were you planning to use?";
    }
    
    if (input.includes('event') || input.includes('fest')) {
      return "🎉 Upcoming events: Tech Fest 2024 registration deadline is in 3 days (Dec 15). This weekend we have a Robotics Workshop on Saturday and Cultural Night on Sunday. The annual Sports Meet is next month. Which event interests you?";
    }
    
    if (input.includes('transport') || input.includes('bus')) {
      return "🚌 The next campus shuttle to City Center arrives in 8 minutes at Gate 2. The hostel shuttle runs every 15 minutes. Live tracking shows Bus #3 is currently at the Engineering Block. Need directions to any bus stop?";
    }
    
    if (input.includes('emergency') || input.includes('help')) {
      return "🚨 For emergencies, call Campus Security: 100. Medical emergencies: Campus Health Center 101. The nearest emergency exit from your location is through the main corridor. I can also connect you to peer support or counseling services. What type of help do you need?";
    }
    
    if (input.includes('faculty') || input.includes('professor')) {
      return "👨‍🏫 Dr. Smith (CS Department) has office hours today 3-5 PM. Prof. Johnson is available for virtual consultation. You can book appointments through the faculty connect system. Which professor or department are you looking for?";
    }

    if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
      return "Hello there! 👋 I'm here to help you navigate campus life. You can ask me about class schedules, facility occupancy, dining options, events, transport, or anything else campus-related. What would you like to know?";
    }

    return "I'm here to help with all campus-related queries! You can ask me about:\n\n🏫 Facility status & occupancy\n📚 Library resources & availability\n🍽️ Dining services & menus\n📅 Class schedules & events\n🚌 Transportation & routes\n👥 Student services & clubs\n🏥 Emergency services\n\nWhat specific information do you need?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    "Check library occupancy",
    "Show my schedule",
    "Campus map",
    "Emergency contacts"
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">AI Campus Assistant</h3>
                <p className="text-sm text-blue-100">Online • Powered by Advanced AI</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 ${
                message.isBot ? 'justify-start' : 'justify-end'
              }`}
            >
              {message.isBot && (
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white ml-auto'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-line">
                  {message.text}
                </p>
                <p className={`text-xs mt-2 ${
                  message.isBot ? 'text-gray-500' : 'text-blue-100'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>

              {!message.isBot && (
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 p-3 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => setInputText(action)}
                  className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about campus..."
                className="w-full p-3 pr-12 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={1}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
                <Mic className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;