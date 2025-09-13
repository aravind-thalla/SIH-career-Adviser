import React, { useState } from 'react';
import { User, Award, BookOpen, Briefcase, Plus, Edit, Save } from 'lucide-react';

interface ProfileBuilderProps {
  user: any;
}

const ProfileBuilder: React.FC<ProfileBuilderProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: user?.name || 'Student Name',
    email: user?.email || 'student@example.com',
    class: '12th Grade',
    school: 'Government High School',
    stream: 'Science (PCM)',
    interests: ['Programming', 'Mathematics', 'Physics'],
    goals: 'To become a Software Engineer at a top tech company',
    achievements: [
      { title: 'Science Olympiad Winner', year: '2023', description: 'First place in State Science Olympiad' },
      { title: 'Coding Competition', year: '2023', description: 'Top 10 in Regional Programming Contest' }
    ],
    extracurriculars: [
      { activity: 'Computer Club President', duration: '2022-2024', impact: 'Led 50+ students in tech projects' },
      { activity: 'Math Tutoring', duration: '2023-2024', impact: 'Helped 20+ juniors improve grades' }
    ],
    skills: {
      technical: ['Python', 'JavaScript', 'HTML/CSS', 'Problem Solving'],
      soft: ['Leadership', 'Communication', 'Team Work', 'Critical Thinking']
    }
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'achievements', name: 'Achievements', icon: Award },
    { id: 'activities', name: 'Activities', icon: Briefcase },
    { id: 'skills', name: 'Skills', icon: BookOpen }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data
    console.log('Profile saved:', profile);
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
        >
          {isEditing ? <Save className="h-5 w-5" /> : <Edit className="h-5 w-5" />}
          <span>{isEditing ? 'Save' : 'Edit'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          {isEditing ? (
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="p-3 bg-gray-50 rounded-lg">{profile.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          {isEditing ? (
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({...profile, email: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="p-3 bg-gray-50 rounded-lg">{profile.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Class</label>
          {isEditing ? (
            <select
              value={profile.class}
              onChange={(e) => setProfile({...profile, class: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>10th Grade</option>
              <option>11th Grade</option>
              <option>12th Grade</option>
              <option>Graduate</option>
            </select>
          ) : (
            <p className="p-3 bg-gray-50 rounded-lg">{profile.class}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">School/College</label>
          {isEditing ? (
            <input
              type="text"
              value={profile.school}
              onChange={(e) => setProfile({...profile, school: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          ) : (
            <p className="p-3 bg-gray-50 rounded-lg">{profile.school}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Stream/Specialization</label>
        {isEditing ? (
          <select
            value={profile.stream}
            onChange={(e) => setProfile({...profile, stream: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Science (PCM)</option>
            <option>Science (PCB)</option>
            <option>Commerce</option>
            <option>Arts</option>
          </select>
        ) : (
          <p className="p-3 bg-gray-50 rounded-lg">{profile.stream}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Career Goals</label>
        {isEditing ? (
          <textarea
            value={profile.goals}
            onChange={(e) => setProfile({...profile, goals: e.target.value})}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        ) : (
          <p className="p-3 bg-gray-50 rounded-lg">{profile.goals}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {interest}
            </span>
          ))}
          {isEditing && (
            <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-300 flex items-center">
              <Plus className="h-4 w-4 mr-1" />
              Add Interest
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const renderAchievementsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Achievements & Awards</h2>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-5 w-5" />
          <span>Add Achievement</span>
        </button>
      </div>

      <div className="space-y-4">
        {profile.achievements.map((achievement, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{achievement.year}</p>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
              <div className="bg-yellow-100 p-2 rounded-full">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderActivitiesTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Extracurricular Activities</h2>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="h-5 w-5" />
          <span>Add Activity</span>
        </button>
      </div>

      <div className="space-y-4">
        {profile.extracurriculars.map((activity, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.activity}</h3>
                <p className="text-blue-600 font-medium mb-2">{activity.duration}</p>
                <p className="text-gray-600">{activity.impact}</p>
              </div>
              <div className="bg-purple-100 p-2 rounded-full">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSkillsTab = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">Skills & Competencies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Technical Skills</h3>
            <button className="text-blue-600 hover:text-blue-700">
              <Plus className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-3">
            {profile.skills.technical.map((skill, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">{skill}</span>
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  Intermediate
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Soft Skills</h3>
            <button className="text-blue-600 hover:text-blue-700">
              <Plus className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-3">
            {profile.skills.soft.map((skill, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">{skill}</span>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  Advanced
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (!user) {
    return (
      <div className="min-h-screen py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <User className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Sign In Required</h1>
            <p className="text-gray-600 mb-8">Please sign in to access your profile builder and track your academic journey.</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Sign In Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Profile Builder</h1>
          <p className="text-xl text-gray-600">Track your achievements, skills, and academic journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{profile.name}</h3>
                <p className="text-gray-600 text-sm">{profile.class}</p>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {activeTab === 'profile' && renderProfileTab()}
              {activeTab === 'achievements' && renderAchievementsTab()}
              {activeTab === 'activities' && renderActivitiesTab()}
              {activeTab === 'skills' && renderSkillsTab()}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex justify-center space-x-4">
          <button 
            onClick={handleSave}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
          >
            <Save className="h-5 w-5" />
            <span>Save Profile</span>
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
            Export as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBuilder;