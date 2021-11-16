import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo3.PNG';
import './Navbar.css';

function Navbar () {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => {
        setIsActive = !isActive;
    }
    
    return (
        <div className = 'container'>
            <nav className = 'navbar'>

                <div className = 'navbar-logo'>
                    <Link onClick = {toggleMenu} className = 'navbar-item' to = '/'>
                        <img src = {logo} alt = 'Logo'/>
                    </Link>
                </div>

                <div className = 'navbar-links'>
                    <ul>
                        <li>
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
                </div>

            </nav>
        </div>
    )
}

export default Navbar;