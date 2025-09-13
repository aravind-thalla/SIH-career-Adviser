import React, { useState } from 'react';
import { BookOpen, Video, FileText, ExternalLink, Search, Filter, Star } from 'lucide-react';

const DiscoveryCenter = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 125 },
    { id: 'courses', name: 'Online Courses', count: 45 },
    { id: 'ebooks', name: 'E-Books', count: 32 },
    { id: 'videos', name: 'Video Tutorials', count: 28 },
    { id: 'success', name: 'Success Stories', count: 20 }
  ];

  const resources = [
    {
      id: 1,
      title: "Complete Python Programming Course",
      description: "Learn Python from basics to advanced with practical projects",
      type: "course",
      provider: "FreeCodeCamp",
      rating: 4.8,
      duration: "12 hours",
      image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg",
      link: "https://freecodecamp.org/python",
      tags: ["Programming", "Python", "Beginner"]
    },
    {
      id: 2,
      title: "Data Structures and Algorithms",
      description: "Master DSA concepts with coding interviews in mind",
      type: "course",
      provider: "GeeksforGeeks",
      rating: 4.7,
      duration: "20 hours",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      link: "https://geeksforgeeks.org/dsa",
      tags: ["Computer Science", "DSA", "Interview Prep"]
    },
    {
      id: 3,
      title: "Digital Marketing Fundamentals",
      description: "Complete guide to modern digital marketing strategies",
      type: "ebook",
      provider: "HubSpot",
      rating: 4.6,
      duration: "3 hour read",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      link: "https://hubspot.com/marketing-guide",
      tags: ["Marketing", "Business", "Digital"]
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      description: "Full-stack web development from HTML to deployment",
      type: "course",
      provider: "W3Schools",
      rating: 4.9,
      duration: "25 hours",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
      link: "https://w3schools.com/bootcamp",
      tags: ["Web Development", "HTML", "CSS", "JavaScript"]
    },
    {
      id: 5,
      title: "From Village to IIT: Rajesh's Journey",
      description: "How a farmer's son cracked JEE Advanced with dedication",
      type: "success",
      provider: "Student Story",
      rating: 4.9,
      duration: "5 min read",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
      link: "#",
      tags: ["Inspiration", "JEE", "Success Story"]
    },
    {
      id: 6,
      title: "Machine Learning Basics",
      description: "Introduction to ML concepts and practical applications",
      type: "video",
      provider: "YouTube",
      rating: 4.7,
      duration: "2 hours",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg",
      link: "#",
      tags: ["AI/ML", "Data Science", "Technology"]
    }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      achievement: "IIT Delhi Graduate → Google Software Engineer",
      story: "From a small town in Rajasthan to working at Google, Priya's journey shows how government colleges can be stepping stones to global success.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      name: "Arjun Kumar",
      achievement: "Government Medical College → AIIMS Doctor",
      story: "Arjun proved that with determination and right guidance, government medical colleges can provide world-class education.",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg"
    },
    {
      name: "Sneha Patel",
      achievement: "B.Com Graduate → Successful CA",
      story: "Starting from a local commerce college, Sneha built her own accounting firm and now mentors other students.",
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.type === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="h-5 w-5" />;
      case 'video': return <Video className="h-5 w-5" />;
      case 'ebook': return <FileText className="h-5 w-5" />;
      default: return <Star className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-4 rounded-full w-fit mx-auto mb-6">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discovery Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access curated educational resources, success stories, and learning materials from top platforms
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category.id
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${resource.image})` }}>
                <div className="h-full bg-black bg-opacity-40 flex items-start justify-between p-4">
                  <div className="flex items-center space-x-2 bg-white bg-opacity-90 rounded-full px-3 py-1">
                    {getResourceIcon(resource.type)}
                    <span className="text-sm font-medium capitalize">{resource.type}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white bg-opacity-90 rounded-full px-2 py-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{resource.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-teal-600 font-medium">{resource.provider}</span>
                  <span className="text-sm text-gray-500">{resource.duration}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{resource.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2">
                    <span>Access Now</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <BookOpen className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                <p className="text-sm font-semibold text-teal-600 mb-4">{story.achievement}</p>
                <p className="text-gray-600 leading-relaxed">{story.story}</p>
                <button className="mt-4 text-teal-600 hover:text-teal-700 font-medium">
                  Read Full Story →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Platforms */}
        <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Trusted Learning Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['FreeCodeCamp', 'GeeksforGeeks', 'W3Schools', 'Khan Academy'].map((platform, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900">{platform}</h3>
                  <p className="text-sm text-gray-600 mt-2">Verified Content</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryCenter;