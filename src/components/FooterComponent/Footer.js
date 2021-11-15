import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <footer>
            <div class = 'icons'>    
                <a href = 'https://www.facebook.com/crypticblaq/'><i class = 'fab fa-facebook'></i></a>
                <a href = 'https://twitter.com/farhan_da_man'><i class = 'fab fa-twitter'></i></a>
                <a href = 'https://www.linkedin.com/in/farhan-z-589906124/'><i class = 'fab fa-linkedin'></i></a>
                <a href = 'https://github.com/fzaman2258'><i class = 'fab fa-github'></i></a>
                <a href = 'mailto:farhanzaman5@gmail.com'><i class = 'fas fa-envelope'></i></a>
            </div>
            <p>Farhan Zaman &copy; 2021</p>
        </footer>
    )
}

export default Footer;