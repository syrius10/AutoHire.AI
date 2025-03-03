import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm AutoHire's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponses: { [key: string]: string } = {
        demo: "I'd be happy to help you schedule a demo! Please visit our contact page or click the 'Request Demo' button in the navigation.",
        features: "AutoHire.AI offers AI-driven candidate matching, automated skill assessments, video interview analysis, and comprehensive analytics. Would you like to know more about any specific feature?",
        pricing: "Our pricing is customized based on your organization's size and needs. I can connect you with our sales team who can provide a detailed quote.",
        default: "Thank you for your message. How else can I assist you with AutoHire.AI's recruitment platform?",
      };

      const lowerInput = inputValue.toLowerCase();
      let responseText = botResponses.default;

      if (lowerInput.includes('demo') || lowerInput.includes('schedule')) {
        responseText = botResponses.demo;
      } else if (lowerInput.includes('feature') || lowerInput.includes('what') || lowerInput.includes('how')) {
        responseText = botResponses.features;
      } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing')) {
        responseText = botResponses.pricing;
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-40"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={
              isMinimized
                ? { opacity: 1, y: 0, scale: 0.95, height: '60px' }
                : { opacity: 1, y: 0, scale: 1, height: 'auto' }
            }
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden z-40"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <MessageCircle size={20} className="text-white" />
                <h3 className="text-white font-medium">AutoHire Assistant</h3>
              </div>
              <button onClick={toggleMinimize} className="text-white hover:text-gray-200 transition-colors">
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
            </div>

            {/* Chat Messages */}
            {!isMinimized && (
              <div className="h-80 overflow-y-auto p-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-tr-none'
                          : 'bg-gray-200 text-gray-800 rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}

            {/* Chat Input */}
            {!isMinimized && (
              <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;