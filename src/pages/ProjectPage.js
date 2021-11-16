import React from 'react';

import covid_tracker from '../images/covid_19_tracker.PNG';
import kitchen_zealot from '../images/kitchen_zealot.PNG';
import flixster from '../images/Walkthrough.gif';

function ProjectPage () {
    return(
        <section id = 'projects'>
            
            <h1>Projects</h1>
            <hr/>
            <div class = 'project_layout'>

                <div class = 'card'>

                    <a href = 'https://covid-19-tracker-5cd82.web.app/'><img src = {covid_tracker} alt = 'Image of Covid-19 Tracker' class = 'proj_img'/></a>
                    <div class = 'project'>
                        <h2>Covid-19 Tracker</h2>
                        <ul>
                            <li>Displays live data of Covid-19 cases, recovered and death count for every country with a line graph and info box</li>
                            <li>Displayed Leaflet Map with red circles and larger radius based off the info box clicked with data from CDC API</li>
                            <li>Tech Stack: React, Nodejs, Firebase, HTML, CSS, Git</li>
                        </ul>
                    </div>

                </div>

                <div class = 'card'>

                    <a href = 'https://kitchen-zealot.firebaseapp.com/'><img src = {kitchen_zealot} alt = 'Image of Kitchen Zealot' class = 'proj_img'/></a>
                    <div class = 'project'>
                        <h2>Kitchen Zealot</h2>
                        <ul>
                            <li>Designed a food delivery system where users could order anonymously or through their registered account</li>
                            <li>Created a food recommendation system based on the previous orders of customers with accounts</li>
                            <li>Implemented different roles and rules to be withheld when utilizing the interface as a restauranter or customer</li>
                            <li>Tech Stack: Angular, Type Script, Firebase, HTML</li>
                        </ul>
                    </div>
                    
                </div>

                <div class = 'card'>
                    <a href = 'https://github.com/fzaman2258/Flixster-Android-App'><img src = {flixster} alt = 'Gif of Flixster App' class = 'proj_img'/></a>
                    <div class = 'project'>
                        <h2>Flixster App</h2>
                        <ul>
                            <li>Flix is an app that allows users to browse movies from the Movie Database API.</li>
                            <li>Tech Stack: Android Studio, Java, Glide, MovieDB, Git</li>
                        </ul>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default ProjectPage;