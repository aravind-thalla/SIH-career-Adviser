import React, { useState } from 'react';
import { Route, ArrowRight, BookOpen, Briefcase, Award, Building } from 'lucide-react';

const CareerRoadmaps = () => {
  const [selectedStream, setSelectedStream] = useState('engineering');

  const roadmaps = {
    engineering: {
      title: "Engineering & Technology",
      color: "from-blue-500 to-blue-600",
      icon: <Building className="h-6 w-6" />,
      stages: [
        {
          level: "Class 10th",
          title: "Foundation",
          options: ["Choose Science Stream", "Focus on Math & Physics"],
          duration: "2 years"
        },
        {
          level: "Class 12th",
          title: "Preparation",
          options: ["PCM (Physics, Chemistry, Math)", "JEE Main/Advanced Prep"],
          duration: "2 years"
        },
        {
          level: "Entrance Exams",
          title: "Gateway",
          options: ["JEE Main", "JEE Advanced", "State Engineering Exams"],
          duration: "6 months"
        },
        {
          level: "Bachelor's",
          title: "Specialization",
          options: ["B.Tech Computer Science", "B.Tech Mechanical", "B.Tech Electrical", "B.Tech Civil"],
          duration: "4 years"
        },
        {
          level: "Career Path",
          title: "Professional Growth",
          options: ["Software Engineer", "Data Scientist", "Product Manager", "Startup Founder"],
          duration: "Lifelong"
        }
      ]
    },
    medical: {
      title: "Medical & Healthcare",
      color: "from-green-500 to-green-600",
      icon: <Award className="h-6 w-6" />,
      stages: [
        {
          level: "Class 10th",
          title: "Foundation",
          options: ["Choose Science Stream", "Focus on Biology"],
          duration: "2 years"
        },
        {
          level: "Class 12th",
          title: "Preparation",
          options: ["PCB (Physics, Chemistry, Biology)", "NEET Preparation"],
          duration: "2 years"
        },
        {
          level: "Entrance Exams",
          title: "Gateway",
          options: ["NEET", "AIIMS", "State Medical Exams"],
          duration: "1 year"
        },
        {
          level: "Bachelor's",
          title: "Medical Education",
          options: ["MBBS", "BDS", "BAMS", "BHMS"],
          duration: "4.5-5.5 years"
        },
        {
          level: "Career Path",
          title: "Specialization",
          options: ["Doctor", "Surgeon", "Specialist", "Medical Researcher"],
          duration: "3-5 years"
        }
      ]
    },
    commerce: {
      title: "Commerce & Business",
      color: "from-purple-500 to-purple-600",
      icon: <Briefcase className="h-6 w-6" />,
      stages: [
        {
          level: "Class 10th",
          title: "Foundation",
          options: ["Choose Commerce Stream", "Basic Accounting"],
          duration: "2 years"
        },
        {
          level: "Class 12th",
          title: "Specialization",
          options: ["Accounts + Economics", "Business Studies + Math"],
          duration: "2 years"
        },
        {
          level: "Entrance Exams",
          title: "Gateway",
          options: ["CA Foundation", "CS Foundation", "CMA Foundation", "University Exams"],
          duration: "6 months"
        },
        {
          level: "Bachelor's",
          title: "Degree",
          options: ["B.Com", "BBA", "B.Sc Economics", "CA Intermediate"],
          duration: "3 years"
        },
        {
          level: "Career Path",
          title: "Professional Growth",
          options: ["Chartered Accountant", "Business Analyst", "Finance Manager", "Entrepreneur"],
          duration: "2-5 years"
        }
      ]
    },
    arts: {
      title: "Arts & Humanities",
      color: "from-pink-500 to-pink-600",
      icon: <BookOpen className="h-6 w-6" />,
      stages: [
        {
          level: "Class 10th",
          title: "Foundation",
          options: ["Choose Arts Stream", "Identify Interest Areas"],
          duration: "2 years"
        },
        {
          level: "Class 12th",
          title: "Specialization",
          options: ["Literature", "History", "Psychology", "Political Science"],
          duration: "2 years"
        },
        {
          level: "Entrance Exams",
          title: "Gateway",
          options: ["DU Entrance", "JNU Entrance", "State University Exams"],
          duration: "6 months"
        },
        {
          level: "Bachelor's",
          title: "Degree",
          options: ["BA Literature", "BA Psychology", "BA History", "BFA"],
          duration: "3 years"
        },
        {
          level: "Career Path",
          title: "Professional Growth",
          options: ["Content Writer", "Journalist", "Teacher", "Civil Servant"],
          duration: "2-4 years"
        }
      ]
    }
  };

  const streams = [
    { id: 'engineering', name: 'Engineering', icon: Building },
    { id: 'medical', name: 'Medical', icon: Award },
    { id: 'commerce', name: 'Commerce', icon: Briefcase },
    { id: 'arts', name: 'Arts', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full w-fit mx-auto mb-6">
            <Route className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Roadmaps</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore step-by-step pathways from Class 10 to your dream career. 
            Choose your stream to see detailed progression routes.
          </p>
        </div>

        {/* Stream Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {streams.map((stream) => {
            const Icon = stream.icon;
            return (
              <button
                key={stream.id}
                onClick={() => setSelectedStream(stream.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-200 ${
                  selectedStream === stream.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{stream.name}</span>
              </button>
            );
          })}
        </div>

        {/* Roadmap Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className={`bg-gradient-to-r ${roadmaps[selectedStream as keyof typeof roadmaps].color} p-3 rounded-lg w-fit mx-auto mb-4 text-white`}>
              {roadmaps[selectedStream as keyof typeof roadmaps].icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {roadmaps[selectedStream as keyof typeof roadmaps].title} Roadmap
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {roadmaps[selectedStream as keyof typeof roadmaps].stages.map((stage, index) => (
                <div key={index} className="relative">
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 px-8">
                      <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-lg ${
                        index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                      } max-w-md`}>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-gray-900">{stage.title}</h3>
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                            {stage.duration}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-blue-600 mb-3">{stage.level}</p>
                        <ul className="space-y-2">
                          {stage.options.map((option, optionIndex) => (
                            <li key={optionIndex} className="flex items-center text-gray-700">
                              <ArrowRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                              <span className="text-sm">{option}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Tips</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Start preparing early for entrance exams</li>
              <li>• Research college cutoffs and requirements</li>
              <li>• Consider backup options and alternative paths</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Government Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Merit-based scholarships available</li>
              <li>• Reserved seats for various categories</li>
              <li>• Financial aid programs</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Factors</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Consistent study schedule</li>
              <li>• Regular practice and mock tests</li>
              <li>• Guidance from mentors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmaps;