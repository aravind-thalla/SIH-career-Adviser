import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MapPin, 
  MessageCircle, 
  FileText, 
  BookOpen, 
  Trophy, 
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  Award
} from 'lucide-react';

const Homepage = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Career Guidance",
      description: "Get personalized career recommendations based on your interests, skills, and goals",
      link: "/quiz",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Government Colleges Directory",
      description: "Discover nearby government colleges with detailed information and admission criteria",
      link: "/colleges",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "24/7 AI Mentor",
      description: "Chat with our AI assistant for instant answers to your career and education questions",
      link: "/chat",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Resume Builder",
      description: "Create professional ATS-friendly resumes with templates designed for students",
      link: "/resume",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Discovery Center",
      description: "Access curated resources, e-books, and learning materials from top platforms",
      link: "/discover",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Success Stories",
      description: "Get inspired by peer achievements and learn from successful career journeys",
      link: "/discover",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Guided", icon: <Users className="h-6 w-6" /> },
    { number: "500+", label: "Government Colleges", icon: <Award className="h-6 w-6" /> },
    { number: "95%", label: "Success Rate", icon: <Target className="h-6 w-6" /> },
    { number: "24/7", label: "AI Support", icon: <MessageCircle className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Smart Career</span> Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Bridge the awareness gap between students and their future prospects. Make informed decisions 
              about streams, courses, colleges, and careers with AI-powered guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quiz"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Take Aptitude Quiz
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/colleges"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Explore Colleges
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Career Guidance Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to make informed decisions about your academic and career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg text-white w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center mt-6 text-blue-600 font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Solving Real Student Challenges
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Stream Confusion:</span> Students don't know which stream to choose after Class 10/12
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">College Awareness:</span> Lack of knowledge about nearby government colleges and their offerings
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Career Mapping:</span> No clear understanding of career paths from different courses
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Information Gap:</span> Students often choose private colleges due to lack of government college awareness
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our AI-Powered Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Personalized Guidance:</span> AI analyzes interests and skills to recommend best-fit career paths
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Government College Focus:</span> Comprehensive database of verified government institutions
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Visual Career Roadmaps:</span> Clear pathways from courses to careers, jobs, and entrepreneurship
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">24/7 Support:</span> AI mentor available anytime for questions and guidance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who've found their perfect career path with CareerCompass-AI
          </p>
          <Link
            to="/quiz"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center group"
          >
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;