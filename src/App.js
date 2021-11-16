import logo from './logo.svg';
import { Routes, Route, Redirect, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/NavbarComponent/Navbar';
import Footer from './components/FooterComponent/Footer';

import LandingPage from './pages/LandingPage';
import AboutMePage from './pages/AboutMePage';
import ProjectPage from './pages/ProjectPage';
import WorkExperiencePage from './pages/WorkExperiencePage';

function App() {
  return (
    <div className="App">
          
      <Navbar/>
      
      <Routes>

        <Route
          path = '/'
          element = {<LandingPage/>}
        />

        <Route
          path = '/aboutme'
          element = {<AboutMePage/>}
        />

        <Route
          path = '/projects'
          element = {<ProjectPage/>}
        />

        <Route
          path = '/workexperience'
          element = {<WorkExperiencePage/>}
        />

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
