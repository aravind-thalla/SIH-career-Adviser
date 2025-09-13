import React, { useState } from 'react';
import { Search, MapPin, Star, Filter, GraduationCap, Users, Award } from 'lucide-react';

const CollegeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedStream, setSelectedStream] = useState('');

  const colleges = [
    {
      id: 1,
      name: "Indian Institute of Technology Delhi",
      location: "Delhi",
      type: "Engineering",
      rating: 4.8,
      established: 1961,
      courses: ["B.Tech", "M.Tech", "PhD"],
      fees: "₹2.5L per year",
      cutoff: "JEE Rank: 1-500",
      facilities: ["Hostel", "Library", "Labs", "Sports"],
      image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg"
    },
    {
      id: 2,
      name: "All India Institute of Medical Sciences",
      location: "Delhi",
      type: "Medical",
      rating: 4.9,
      established: 1956,
      courses: ["MBBS", "MD", "MS"],
      fees: "₹5,000 per year",
      cutoff: "NEET Rank: 1-100",
      facilities: ["Hospital", "Research Center", "Hostel", "Library"],
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
    },
    {
      id: 3,
      name: "Delhi University - Sri Venkateshwara College",
      location: "Delhi",
      type: "Commerce",
      rating: 4.5,
      established: 1961,
      courses: ["B.Com", "B.Com (Hons)", "M.Com"],
      fees: "₹25,000 per year",
      cutoff: "95%+ in Class 12",
      facilities: ["Library", "Computer Lab", "Auditorium", "Canteen"],
      image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
    },
    {
      id: 4,
      name: "Jawaharlal Nehru University",
      location: "Delhi",
      type: "Arts",
      rating: 4.6,
      established: 1969,
      courses: ["BA", "MA", "PhD"],
      fees: "₹20,000 per year",
      cutoff: "JNU Entrance Test",
      facilities: ["Library", "Research Centers", "Hostel", "Sports"],
      image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg"
    },
    {
      id: 5,
      name: "National Institute of Technology Trichy",
      location: "Tamil Nadu",
      type: "Engineering",
      rating: 4.7,
      established: 1964,
      courses: ["B.Tech", "M.Tech", "MBA"],
      fees: "₹1.8L per year",
      cutoff: "JEE Rank: 500-5000",
      facilities: ["Hostel", "Labs", "Sports Complex", "Library"],
      image: "https://images.pexels.com/photos/1797121/pexels-photo-1797121.jpeg"
    },
    {
      id: 6,
      name: "Government Medical College Mumbai",
      location: "Maharashtra",
      type: "Medical",
      rating: 4.4,
      established: 1845,
      courses: ["MBBS", "MD", "Diploma"],
      fees: "₹50,000 per year",
      cutoff: "NEET Rank: 100-1000",
      facilities: ["Hospital", "Research Lab", "Library", "Hostel"],
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
    }
  ];

  const states = ["All States", "Delhi", "Maharashtra", "Tamil Nadu", "Karnataka", "West Bengal", "Rajasthan"];
  const streams = ["All Streams", "Engineering", "Medical", "Commerce", "Arts"];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = !selectedState || selectedState === 'All States' || college.location === selectedState;
    const matchesStream = !selectedStream || selectedStream === 'All Streams' || college.type === selectedStream;
    
    return matchesSearch && matchesState && matchesStream;
  });

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full w-fit mx-auto mb-6">
            <GraduationCap className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Government Colleges Directory</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover government colleges near you with verified information about courses, fees, and admissions
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search colleges or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* State Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Stream Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {streams.map(stream => (
                  <option key={stream} value={stream}>{stream}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredColleges.length} colleges
          </p>
        </div>

        {/* College Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredColleges.map(college => (
            <div key={college.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${college.image})` }}>
                <div className="h-full bg-black bg-opacity-40 flex items-end p-6">
                  <div className="text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{college.rating}</span>
                      <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-sm">
                        {college.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{college.location}</span>
                      <span className="mx-2">•</span>
                      <span>Est. {college.established}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Courses Offered</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {college.courses.map((course, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Annual Fees</p>
                    <p className="text-green-600 font-bold">{college.fees}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Admission Cutoff</p>
                  <p className="text-sm text-gray-600">{college.cutoff}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Facilities</p>
                  <div className="flex flex-wrap gap-2">
                    {college.facilities.map((facility, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Compare Colleges
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Government Colleges?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Education</h3>
              <p className="text-gray-600">Top-notch faculty and research facilities</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Affordable Fees</h3>
              <p className="text-gray-600">Lower fees compared to private institutions</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Recognized Degrees</h3>
              <p className="text-gray-600">Government-approved and industry-accepted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDirectory;