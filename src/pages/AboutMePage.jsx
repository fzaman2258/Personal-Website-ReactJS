import React from 'react';

function AboutMePage () {
    return(
        <section id = 'about_me' >
            <h1>About Me</h1>
            <hr/>

            <div class = 'about'>
                <div class = 'left_about_me' >
                    <p>
                        Welcome, my name is Farhan Zaman. I am a 22 year old Software Engineer who recently graduated this past Spring 2021 studying Computer Science at CCNY.
                        I am currently looking for full-time work as a Software Engineer or even a Fullstack developer. My favorite programming language is Python3.
                    </p>
                </div>

                <div class = 'right_about_me'>
                    <img src = '../images/Image_of_myself.png' alt = 'Image of Myself' class = 'right_media'/> 

                    <div class = 'icons'>    
                        <hr/>        
                        <a href = 'https://github.com/fzaman2258'><i class = 'fab fa-github'></i></a>
                        <a href = 'https://www.linkedin.com/in/farhan-z-589906124/'><i class = 'fab fa-linkedin'></i></a>
                        <a href = 'https://www.facebook.com/crypticblaq/'><i class = 'fab fa-facebook-square'></i></a>
                        <a href = 'https://twitter.com/farhan_da_man'><i class = 'fab fa-twitter'></i></a>
                        <a href = 'mailto:fzaman2258@bths.edu'><i class = 'far fa-envelope'></i></a>
                        <hr/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default AboutMePage;