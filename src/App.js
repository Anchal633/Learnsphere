import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuBar from './components/Navbar';
import CoursesPage from './components/CoursesPage';
import CoursesSection from './components/CoursesSection';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CourseDetail from './components/CourseDetail';
import Footer from './components/Footer'; // Import Footer component
import './App.css';
import AccountPage from './components/AccountPage';
import AboutPage from './components/AboutPage'; // Make sure to import AboutPage here

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MenuBar />
        <Routes>
          <Route path="/" element={<><HeroSection /><CoursesSection /></>} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/Account" element={<AccountPage />} />
          {/* Additional routes for other menu items */}
          <Route path="/account" element={<div>Home</div>} />
          <Route path="/subjects" element={<div>Courses</div>} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/about" element={<AboutPage />} /> {/* Add AboutPage route */}
          {/* <Route path="/activities" element={<div>About</div>} /> */}

        </Routes>

        <Footer />  {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
