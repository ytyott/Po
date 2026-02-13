import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TreksPage from './pages/TreksPage';
import TrekDetailPage from './pages/TrekDetailPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0B1E1A] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="font-display text-4xl md:text-6xl font-bold text-[#F4F7F5] tracking-wider mb-4">
            TRAILTRUST
          </div>
          <div className="w-48 h-1 bg-[#143026] rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-[#CFFF7A] animate-pulse rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#0B1E1A] text-[#F4F7F5]">
        {/* Grain overlay */}
        <div className="grain-overlay"></div>
        
        {/* Vignette overlay */}
        <div className="vignette-overlay"></div>
        
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/treks" element={<TreksPage />} />
            <Route path="/treks/:id" element={<TrekDetailPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking/:trekId" element={<BookingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
