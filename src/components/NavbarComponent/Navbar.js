import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive = !isActive;
    }
    
    return (
        <div className = 'container'>
            <nav className = 'navbar'>
                <ul class = 'nav nav-tabs'>

                    <li class = 'active'>
                        <Link onClick = {toggleMenu} className = 'navbar-item' data-toggle = 'tab' to = '/'>Home</Link>
                    </li>

                    <li>
                        <Link onClick = {toggleMenu} className = 'navbar-item' data-toggle = 'tab' to = '/aboutme'>About Me</Link>
                    </li>

                    <li>
                        <Link onClick = {toggleMenu} className = 'navbar-item' data-toggle = 'tab' to = '/projects'>Projects</Link>
                    </li>

                    <li>
                        <Link onClick = {toggleMenu} className = 'navbar-item' data-toggle = 'tab' to = '/workexperience'>Work Experience</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar;