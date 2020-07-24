import React from 'react';
import '../ToStyleCompo.css';
import SimpleImageSlider from "react-simple-image-slider";
import ft from './Exp-pic/ft.png';
import wt from './Exp-pic/wipro-logo.jpg';
import b1 from './Blogs-pic/B1.png';
import b2 from './Blogs-pic/B2.png';
import b3 from './Blogs-pic/B3.png';
import b4 from './Blogs-pic/B4.png';
import b5 from './Blogs-pic/B5.png';
import b6 from './Blogs-pic/B6.png';

const images = [
    {url: b1 },
    {url: b2 },
    {url: b3 },
    {url: b4 },
    {url: b5 },
    {url: b6 },
];

function Profession(){
    return(
        <div className="Profession-Content">
            <h1>My Profession ...</h1>
            <div className="Profession-Maintext">
{/* Skills set  */}
                <h3>Skills-set</h3>
                <div className="Skillset">
                    <ul>
                        <li>Ruby</li>
                        <li>Ruby on rails</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Python</li>
                        <li>MySQL</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>Jira</li>
                    </ul>
                </div>
                <br/>
                <hr/>

{/* Blogs */}
                <div className="Blogs-Section">
                    <h3>My Blogs</h3>
                {/* Image Slider */}
                <div className="Blogs-Section-Content">
                    <div className="Image-Slider">
                        <SimpleImageSlider width={600} height={504} images={images} />
                    </div>
                    <div className="Links">
                        Read them here 👇<br/>
                        <a href="https://medium.com/@girijavmohan/redux-is-one-of-the-hottest-libraries-in-front-end-development-these-days-redux-98d9044b695c" target="_blank">Redux</a><br/>
                        <a href="https://medium.com/@girijavmohan/explore-react-hooks-dbc496028783" target="_blank">Explore React Hooks</a><br/>
                        <a href="https://medium.com/@girijavmohan/git-is-a-distributed-version-control-system-vcs-that-makes-it-easier-to-track-changes-to-files-a1cf3cf520ea" target="_blank" >Git</a><br/>
                        <a href="https://medium.com/@girijavmohan/create-project-using-rails-e20101536f81" target="_blank" >FBMS</a><br/>
                        <a href="https://medium.com/@girijavmohan/flight-boarding-management-system-fbms-644947d8c3d2" target="_blank" >FBMS ER Modeling</a><br/>
                        <a href="https://medium.com/@girijavmohan/software-testing-a-sketch-6bfb89465818" target="_blank" >Software Testing</a><br/>
                    </div>
                </div>
                    {/* <SimpleImageSlider width={800} height={504} images={images} /> */}
                    {/* <Slider slides={images} /> */}
                </div>
                <br/>
                <hr/>

{/* Projects */}
                <div className="Project-Section">
                    <h3>My Projects</h3>
                    <div className="Image-Slider">
                        {/* <SimpleImageSlider width={800} height={504} images={videos} /> */}
                        Here is the demo of my project.<br/>
                        <iframe width="760" height="415" src="https://www.youtube.com/embed/U_oQsWRu6I4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br/>Here is the outlined code workthrough for the project.<br/>
                        <iframe width="760" height="415" src="https://www.youtube.com/embed/HsLJEWY1MPI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    </div>

                </div>
                <br/>
                <hr/>

{/* Experience */}
                <div className="Experience">
                    <h3>Experience</h3>
                    <div className="VLine">
                        <ul>
                            <div className="logo">
                                <img src={wt} alt="Wipro Technologies"/>
                            </div>
                            <div className="Content-box2">
                                
                            <li>Worked for Clients National Grid and Standard Bank of South Africa
                            <ul>
                                <li>Trained and worked on SAP ABAP scripts</li>
                                <li>Generated Smartforms, Reports, Forms</li>
                                <li>Worked on Exits, BAPI, LSMW</li>
                                <li>Made Performance Tuning functionalities using ST05 and other tcodes.</li>
                                <li>Developed requirements document, user report, test case documents for the respective programs created.</li>
                            </ul></li>
                            </div> <br/>
                            <div className="logo">
                                <img src={ft} alt="Flatiron Coding Bootcamp"/>
                            </div>
                            <div className="Content-box1">
                            <li>Attended Immersive Coding Bootcamp
                                <ul>
                                <li>Worked on building Single Page Applications using React and Redux</li>
                                <li>Created SPA using Babel transpiler and Webpack bundler.</li>
                                <li>Experienced in working with many APIs like edumam, tropicalfruitandveg, US Restaurants Menus.</li>
                                <li>Worked on integrating third-party payment module - Stripe Checkout </li>
                                <li>Modeled database schema with ActiveRecord, Postgres and Ruby on Rails.</li>
                                <li>Process of Authentication using encrypted tokens via JWT</li>  
                                </ul>
                            </li>
                            </div><br/>

                            My journey continues ...
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default Profession;