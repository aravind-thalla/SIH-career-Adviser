import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI career mentor. I'm here to help you with questions about careers, colleges, courses, and educational pathways. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "Which stream should I choose after 10th?",
    "What are the best engineering colleges?",
    "How to prepare for NEET exam?",
    "Career options in commerce?",
    "Government job opportunities?",
    "Scholarship programs available?"
  ];

  const aiResponses = {
    "stream": "Based on your interests and aptitude, I can help you choose between Science, Commerce, or Arts. Science is great for engineering/medical careers, Commerce for business/finance, and Arts for creative/humanities fields. Would you like to take our aptitude quiz to get personalized recommendations?",
    "engineering": "Top government engineering colleges include IITs, NITs, and state engineering colleges. IIT Delhi, IIT Bombay, NIT Trichy are highly ranked. For admission, you'll need to clear JEE Main and JEE Advanced. The cutoffs vary, but typically require ranks within 1000-50000 depending on the college and branch.",
    "neet": "NEET preparation requires systematic study of Physics, Chemistry, and Biology. Start with NCERT books, then move to reference books like HC Verma for Physics and MTG for Biology. Practice with previous year papers and mock tests. Consistent study for 10-12 hours daily for 2 years gives best results.",
    "commerce": "Commerce offers diverse career paths: CA (Chartered Accountant), CS (Company Secretary), Banking, Finance, Business Management, Economics, and Entrepreneurship. Popular courses include B.Com, BBA, CA, CS, CMA. Government colleges like DU, Presidency College offer excellent programs.",
    "government": "Government jobs through SSC, UPSC, Banking exams (SBI, IBPS), Railway exams, State PSCs, and Defense services. These offer job security, good pay, and prestige. Start preparation early, focus on current affairs, and practice quantitative aptitude regularly.",
    "scholarship": "Government scholarships include National Merit Scholarship, Post Matric Scholarships, Inspire Fellowship, and state-specific schemes. Merit-based and need-based options available. Check NSP (National Scholarship Portal) for applications. Most require good academic performance and family income criteria."
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('stream') || message.includes('10th') || message.includes('choose')) {
      return aiResponses.stream;
    } else if (message.includes('engineering') || message.includes('iit') || message.includes('nit')) {
      return aiResponses.engineering;
    } else if (message.includes('neet') || message.includes('medical') || message.includes('doctor')) {
      return aiResponses.neet;
    } else if (message.includes('commerce') || message.includes('business') || message.includes('ca')) {
      return aiResponses.commerce;
    } else if (message.includes('government') || message.includes('ssc') || message.includes('upsc')) {
      return aiResponses.government;
    } else if (message.includes('scholarship') || message.includes('financial aid')) {
      return aiResponses.scholarship;
    } else {
      return "That's a great question! I can help you with career guidance, college information, exam preparation, and course selection. Could you please provide more specific details about what you'd like to know? You can also try our aptitude quiz for personalized recommendations.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-full w-fit mx-auto mb-6">
            <MessageCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Career Mentor</h1>
          <p className="text-xl text-gray-600">
            Get instant answers to your career and education questions, 24/7
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Quick Questions */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-b">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Questions:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-left p-3 bg-white rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm border border-gray-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-6 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`p-2 rounded-full ${
                    message.sender === 'user' 
                      ? 'bg-blue-600' 
                      : 'bg-gradient-to-r from-purple-500 to-purple-600'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-5 w-5 text-white" />
                    ) : (
                      <Bot className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`p-4 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-6">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-gray-100 p-4 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 border-t bg-gray-50">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about careers, colleges, or education..."
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Instant Responses</h3>
            <p className="text-gray-600 text-sm">Get immediate answers to your career questions</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">Personalized Guidance</h3>
            <p className="text-gray-600 text-sm">Tailored advice based on your interests and goals</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Available</h3>
            <p className="text-gray-600 text-sm">Available anytime to support your journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;