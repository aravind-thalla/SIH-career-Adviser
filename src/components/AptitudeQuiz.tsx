import React, { useState } from 'react';
import { Brain, CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';

const AptitudeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<any>(null);

  const questions = [
    {
      id: 1,
      question: "What type of activities do you enjoy most?",
      options: [
        { text: "Solving mathematical problems and puzzles", category: "technical", weight: 3 },
        { text: "Creating art, writing, or designing", category: "creative", weight: 3 },
        { text: "Helping and interacting with people", category: "social", weight: 3 },
        { text: "Analyzing data and researching", category: "analytical", weight: 3 }
      ]
    },
    {
      id: 2,
      question: "Which subject did you perform best in during school?",
      options: [
        { text: "Mathematics and Physics", category: "technical", weight: 2 },
        { text: "Languages and Literature", category: "creative", weight: 2 },
        { text: "Biology and Chemistry", category: "analytical", weight: 2 },
        { text: "History and Social Sciences", category: "social", weight: 2 }
      ]
    },
    {
      id: 3,
      question: "What kind of work environment appeals to you?",
      options: [
        { text: "Laboratory or technical workspace", category: "technical", weight: 2 },
        { text: "Creative studio or flexible space", category: "creative", weight: 2 },
        { text: "Office with team collaboration", category: "social", weight: 2 },
        { text: "Research facility or quiet study area", category: "analytical", weight: 2 }
      ]
    },
    {
      id: 4,
      question: "Which activity would you choose for a group project?",
      options: [
        { text: "Building or programming something", category: "technical", weight: 2 },
        { text: "Designing the presentation", category: "creative", weight: 2 },
        { text: "Leading and coordinating the team", category: "social", weight: 2 },
        { text: "Researching and gathering data", category: "analytical", weight: 2 }
      ]
    },
    {
      id: 5,
      question: "What motivates you most in learning?",
      options: [
        { text: "Understanding how things work", category: "technical", weight: 3 },
        { text: "Expressing ideas creatively", category: "creative", weight: 3 },
        { text: "Making a positive impact on others", category: "social", weight: 3 },
        { text: "Discovering new information", category: "analytical", weight: 3 }
      ]
    }
  ];

  const careerRecommendations = {
    technical: {
      title: "Engineering & Technology",
      careers: ["Software Engineer", "Mechanical Engineer", "Data Scientist", "Cybersecurity Analyst"],
      streams: ["Science (PCM)", "Computer Science"],
      colleges: ["IITs", "NITs", "Government Engineering Colleges"],
      description: "You have a strong aptitude for technical problem-solving and logical thinking."
    },
    creative: {
      title: "Creative & Design",
      careers: ["Graphic Designer", "Content Writer", "Architect", "Digital Marketer"],
      streams: ["Arts", "Commerce", "Design"],
      colleges: ["NIFT", "National Institute of Design", "Journalism Colleges"],
      description: "Your creative mindset and artistic abilities make you ideal for design and creative fields."
    },
    social: {
      title: "Social & Management",
      careers: ["Teacher", "HR Manager", "Social Worker", "Business Analyst"],
      streams: ["Arts", "Commerce", "Management"],
      colleges: ["DU", "Government Arts Colleges", "Management Institutes"],
      description: "Your people skills and empathy make you perfect for social and management roles."
    },
    analytical: {
      title: "Research & Analysis",
      careers: ["Research Scientist", "Doctor", "Financial Analyst", "Psychologist"],
      streams: ["Science (PCB)", "Commerce", "Research"],
      colleges: ["Medical Colleges", "Research Universities", "Government Science Colleges"],
      description: "Your analytical mind and research orientation suit you for investigative careers."
    }
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (allAnswers: number[]) => {
    const scores: { [key: string]: number } = {
      technical: 0,
      creative: 0,
      social: 0,
      analytical: 0
    };

    allAnswers.forEach((answerIndex, questionIndex) => {
      const question = questions[questionIndex];
      const selectedOption = question.options[answerIndex];
      scores[selectedOption.category] += selectedOption.weight;
    });

    const topCategory = Object.keys(scores).reduce((a, b) => 
      scores[a] > scores[b] ? a : b
    );

    setResults({
      scores,
      topCategory,
      recommendation: careerRecommendations[topCategory as keyof typeof careerRecommendations]
    });
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setResults(null);
  };

  if (showResults && results) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h1>
              <p className="text-gray-600">Here are your personalized career recommendations</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Best Fit: {results.recommendation.title}
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                {results.recommendation.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Recommended Careers</h3>
                  <ul className="space-y-2">
                    {results.recommendation.careers.map((career: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Suitable Streams</h3>
                  <ul className="space-y-2">
                    {results.recommendation.streams.map((stream: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                        {stream}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Top Colleges</h3>
                  <ul className="space-y-2">
                    {results.recommendation.colleges.map((college: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                        {college}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Your Aptitude Breakdown</h3>
              <div className="space-y-3">
                {Object.entries(results.scores).map(([category, score]) => (
                  <div key={category}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="capitalize font-medium text-gray-700">{category}</span>
                      <span className="text-gray-600">{score}/15</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(score / 15) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={resetQuiz}
                className="flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                Retake Quiz
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Explore Career Roadmaps
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full w-fit mx-auto mb-4">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Aptitude & Interest Quiz</h1>
            <p className="text-gray-600">Discover your perfect career path with AI-powered analysis</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Progress</span>
              <span>{currentQuestion + 1} of {questions.length}</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 group-hover:text-blue-700 transition-colors">
                      {option.text}
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm">
            Take your time to choose the option that best represents you
          </div>
        </div>
      </div>
    </div>
  );
};

export default AptitudeQuiz;