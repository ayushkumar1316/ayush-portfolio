import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'

// Exact Scroll Memory: universal capture + lock & premium router
function ScrollHandler() {
  const location = useLocation();

  // 1. THE ULTIMATE SNIPER (PointerDown Upgrade): Catches touch/mouse-press instantly
  useEffect(() => {
    const handleGlobalPointerDown = () => {
      if (window.location.pathname === '/') {
        sessionStorage.setItem('homeScrollY', window.scrollY.toString());
      }
    };
    
    document.addEventListener('pointerdown', handleGlobalPointerDown, true);
    
    return () => {
      document.removeEventListener('pointerdown', handleGlobalPointerDown, true);
    };
  }, []);


  // 2. THE LOCK & PREMIUM ROUTER: Handles return-jumps and smooth hash scrolling
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const prevPath = sessionStorage.getItem('prevPath');
    const returningFromCaseStudy = prevPath && prevPath.includes('/case-study') && location.pathname === '/';

    if (returningFromCaseStudy) {
      const savedY = sessionStorage.getItem('homeScrollY');
      if (savedY) {
        const targetY = parseInt(savedY, 10);
        document.documentElement.style.scrollBehavior = 'auto'; 
        
        let attempts = 0;
        const scrollLockInterval = setInterval(() => {
          window.scrollTo({ top: targetY, behavior: 'auto' });
          attempts++;
          if (attempts > 10) {
            clearInterval(scrollLockInterval);
            document.documentElement.style.scrollBehavior = ''; 
            sessionStorage.removeItem('prevPath'); 
          }
        }, 50);
        return () => clearInterval(scrollLockInterval);
      }
    } 
    else if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          const headerOffset = 80;
          const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100); 
    } 
    else if (location.pathname === '/') {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }

    sessionStorage.setItem('prevPath', location.pathname);

  }, [location]);

  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="min-h-screen bg-[#05030d]"
      >
        <ScrollHandler />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<CaseStudy />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          {/* Legacy route redirect */}
          <Route path="/case-study" element={<CaseStudy />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App
