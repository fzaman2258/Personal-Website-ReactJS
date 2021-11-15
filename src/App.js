import logo from './logo.svg';
import { Routes, Route, Redirect, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/NavbarComponent/Navbar';

import LandingPage from './pages/LandingPage.jsx';
import AboutMePage from './pages/AboutMePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import WorkExperiencePage from './pages/WorkExperiencePage.jsx';

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

    </div>
  );
}

export default App;
