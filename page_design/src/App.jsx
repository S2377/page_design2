
import AIChatInterface from './components/AIChatInterface';
import BookManagementDashboard from './components/Dashboard';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import ImageContent from './components/ImageContent';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import Signup from './components/Signup';
import Testimonials from './components/Testimonials';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './context/user';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar /> {/* Navbar should be inside BrowserRouter but outside Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <ImageContent />
                <Destinations />
                <AIChatInterface />
                <Testimonials />
                <PricingSection />
                <Footer />
              </main>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<BookManagementDashboard />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;