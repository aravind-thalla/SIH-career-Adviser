import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AptitudeQuiz from './components/AptitudeQuiz';
import CareerRoadmaps from './components/CareerRoadmaps';
import CollegeDirectory from './components/CollegeDirectory';
import AIChat from './components/AIChat';
import ResumeBuilder from './components/ResumeBuilder';
import DiscoveryCenter from './components/DiscoveryCenter';
import ProfileBuilder from './components/ProfileBuilder';
import Auth from './components/Auth';

function App() {
  const [user, setUser] = useState<any>(null);
  const [showAuth, setShowAuth] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar user={user} onAuthClick={() => setShowAuth(true)} onLogout={() => setUser(null)} />
        
        {showAuth && (
          <Auth 
            onClose={() => setShowAuth(false)} 
            onAuth={(userData) => {
              setUser(userData);
              setShowAuth(false);
            }} 
          />
        )}

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/quiz" element={<AptitudeQuiz />} />
          <Route path="/roadmaps" element={<CareerRoadmaps />} />
          <Route path="/colleges" element={<CollegeDirectory />} />
          <Route path="/chat" element={<AIChat />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/discover" element={<DiscoveryCenter />} />
          <Route path="/profile" element={<ProfileBuilder user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;