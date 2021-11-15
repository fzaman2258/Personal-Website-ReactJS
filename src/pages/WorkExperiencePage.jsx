import React from 'react';
import nyc_dep from '../images/nyc_dep_logo.jpg';
import khan from'../images/khan_tutorial_logo.jpg';
import whiterock from '../images/whiterock_ai_logo.png';

function WorkExperiencePage () {
    return(
        <section id = 'work_exp'>
            <h1>Work Experience</h1>
            <hr/>
            <div class = 'work'>

                <div class = 'work_row'>

                    <div class = 'left_work'>
                        <img src = {whiterock} alt = 'Whiterock AI Logo' />
                    </div>

                    <div class = 'right_work'>

                        <h3>Whiterock AI</h3>
                        <h4>Software Engineering Intern</h4>
                        <h5>September 2021 - December 2021</h5>
                        <h6>Manhattan, NY</h6>
                        <ul>
                            <li>Developed a BigQuery-to-BigQuery data pipeline that leveraged Google Cloud Storage as a staging environment</li>
                            <li>Automated the scheduling of pipelines through GCP Composer (Airflow), reducing task execution time by 50%</li>
                            <li>Coded script for data pipelines leveraging GCP Dataproc (Spark) operators to handle large scale jobs in parallel</li>
                        </ul>
                    </div>

                </div>

                <div class = 'work_row'>

                    <div class = 'left_work'>
                        <img src = {nyc_dep} alt = 'NYC DEP Logo' />
                    </div>

                    <div class = 'right_work'>

                        <h3>NYC Department of Environmental Protection</h3>
                        <h4>Cyber Security Intern</h4>
                        <h5>June 2019 - December 2019</h5>
                        <h6>Queens, NY</h6>
                        <ul>
                            <li>Utilized a ticketing system to collaborate with IT staff to resolve technical issues submitted by 6,000 employees</li>
                            <li>Developed a script to automate checking of potentially malicious URLs, IPs, and Hashes (MD5 and SHA-256)</li>
                            <li>Installed McAfee agents on company devices, tested products on company’s Web Gateway, and collaborated with staff to develop user guide documentation that were distributed to employees in other departments</li>
                            <li>Tested Web Application for Bureau of Engineering Design and Construction to ensure proper functionality</li>
                        </ul>
                    </div>

                </div>

                <div class = 'work_row'>

                    <div class = 'left_work'>
                        <img src = {khan} alt = 'Khans Tutorial Logo'  />
                    </div>

                    <div class = 'right_work'>
                        <h3>Khans Tutorial</h3>
                        <h4>Common Core, SHSAT Instructor</h4>
                        <h5>October 2016 - November 2017</h5>
                        <h5>Astoria, NY</h5>
                        <ul>
                            <li>Instructed a maximum of 20 students in algebra, trigonometry, and reading comprehension, which resulted into a 100% acceptance rate into specialized high schools, such as Stuyvesant, Bronx Science, and Brooklyn Tech</li>
                            <li>Prepared coursework, graded homework assignments, tracked progress over time to adjust teaching material when necessary, and reported to parents every session regarding their child’s performance and progress</li>
                        </ul>
                    </div>

                </div>
                
            </div>
        </section>
    )
}

export default WorkExperiencePage;