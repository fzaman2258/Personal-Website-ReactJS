import React from 'react';
import image_of_myself from '../images/Image_of_myself.png';

function AboutMePage () {
    return(
        <section id = 'about_me' >
            <h1>About Me</h1>
            <hr/>

            <div className = 'about'>
                <div className = 'left_about_me' >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>


                </div>

                <div className = 'right_about_me'>
                    <img src = '' alt = 'Image of Myself' className = 'right_media'/> 

                    <div className = 'icons'>    
                        <hr/>        
                        <a href = 'https://github.com/fzaman2258'><i className = 'fab fa-github'></i></a>
                        <a href = 'https://www.linkedin.com/in/farhan-z-589906124/'><i className = 'fab fa-linkedin'></i></a>
                        <a href = 'https://www.facebook.com/crypticblaq/'><i className = 'fab fa-facebook-square'></i></a>
                        <a href = 'https://twitter.com/farhan_da_man'><i className = 'fab fa-twitter'></i></a>
                        <a href = 'mailto:fzaman2258@bths.edu'><i className = 'far fa-envelope'></i></a>
                        <hr/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default AboutMePage;