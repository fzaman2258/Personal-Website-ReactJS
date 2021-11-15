import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive = !isActive;
    }
    
    return (
        <nav className = 'navbar'>
            <div>
                <Link onClick = {toggleMenu} className = 'navbar-item' to = '/'>Home</Link>
                <Link onClick = {toggleMenu} className = 'navbar-item' to = '/aboutme'>About Me</Link>
                <Link onClick = {toggleMenu} className = 'navbar-item' to = '/projects'>Projects</Link>
                <Link onClick = {toggleMenu} className = 'navbar-item' to = '/workexperience'>Work Experience</Link>
            </div>
        </nav>
    )
}

export default Navbar;