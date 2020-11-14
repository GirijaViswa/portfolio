import React from 'react';
import '../ToStyleCompo.css';
import SimpleImageSlider from "react-simple-image-slider";
import ft from './Exp-pic/ft.png';
import wt from './Exp-pic/wipro-logo.jpg';
import wta from './Exp-pic/wipro.jpeg';
import ftc from './Exp-pic/ftc.png';
import dome from './Exp-pic/dome.png';
import b1 from './Blogs-pic/B1.png';
import b2 from './Blogs-pic/B2.png';
import b3 from './Blogs-pic/B3.png';
import b4 from './Blogs-pic/B4.png';
import b5 from './Blogs-pic/B5.png';
import b6 from './Blogs-pic/B6.png';
import b7 from './Blogs-pic/B7.png';
import b8 from './Blogs-pic/B8.png';
import b9 from './Blogs-pic/B9.png';
import b10 from './Blogs-pic/B10.png';
import b11 from './Blogs-pic/B11.png';
import b12 from './Blogs-pic/B12.png';
import b13 from './Blogs-pic/B13.png';
import b14 from './Blogs-pic/B14.png';
import b15 from './Blogs-pic/B15.png';
import b16 from './Blogs-pic/B16.png';
import b17 from './Blogs-pic/B17.png';
import b18 from './Blogs-pic/B18.png';


const images = [
    {url: b1 },
    {url: b2 },
    {url: b3 },
    {url: b4 },
    {url: b5 },
    {url: b6 },
    {url: b7 },
    {url: b14 },
    {url: b15 },
    {url: b16 },
    {url: b17 },
    {url: b18 }
];

const dsImages = [
    {url: b8 },
    {url: b9 },
    {url: b10 },
    {url: b11 },
    {url: b12 },
    {url: b13 }
];

const certificateImages = [
    {url: wta },
    {url: ftc },
    {url: dome }
];


function Profession(){
    return(
        <div className="Profession-Content">
            <h1>My Profession </h1>
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
                    <div className="Image-Slider">
                        <SimpleImageSlider width={800} height={504} images={images} />
                    </div>
                    <div className="Links">
                        Read them here 👇<br/><ul>
                        <li><a href="https://medium.com/@girijavmohan/redux-is-one-of-the-hottest-libraries-in-front-end-development-these-days-redux-98d9044b695c" target="_blank">Redux</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/explore-react-hooks-dbc496028783" target="_blank">Explore React Hooks</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/git-is-a-distributed-version-control-system-vcs-that-makes-it-easier-to-track-changes-to-files-a1cf3cf520ea" target="_blank" >Git</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/create-project-using-rails-e20101536f81" target="_blank" >FBMS</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/flight-boarding-management-system-fbms-644947d8c3d2" target="_blank" >FBMS ER Modeling</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/software-testing-a-sketch-6bfb89465818" target="_blank" >Software Testing</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/unit-testing-6c7d51bb2456" target="_blank" >Unit Testing</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/difference-between-var-let-and-const-in-javascript-861b0df01529" target="_blank" >Difference between var, let and const javascript variables</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/what-is-hoisting-e25e839b06e" target="_blank" >Hoisting</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/regular-functions-vs-arrow-functions-497156662f07" target="_blank" >Regular Functions vs Arrow Functions</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/currying-in-javascript-1feddbb4a431" target="_blank" > Understanding Currying in Javascript </a><br/></li>
                        <li><a href="https://girijavmohan.medium.com/" target="_blank" > Understanding Javascript Closures</a><br/></li>
                        </ul></div>
                

                        Blogs on Data Structures

                        <div className="Image-Slider">
                        <SimpleImageSlider width={800} height={504} images={dsImages} />
                        </div>
                        <div className="Links">
                        Read them here 👇<br/><ul>
                        <li><a href="https://medium.com/@girijavmohan/linear-search-binary-search-data-structure-814d0dc4651c" target="_blank" >Linear and Binary search</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/interpolation-search-7b10e2330e97" target="_blank" >Interpolation Search</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/real-time-examples-for-ls-bs-hash-a63c8e56e2ad" target="_blank" >Real time examples for Linear,Binary Search,Hash table</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/queue-84bd5c54821" target="_blank" >Queue - Data Structure</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/stack-bc9bb7a61e82" target="_blank" >Stack - Data Structure</a><br/></li>
                        <li><a href="https://medium.com/@girijavmohan/difference-between-stack-and-queue-df5e6451768f" target="_blank" >Difference between Queues and Stacks</a><br/></li>
                        </ul></div>
                    
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
                </div><hr/>

{/* Certificates and Awards */}
<div className="Certificates-Section">
                    <h3>Certificates and Awards</h3>
                    <div className="Certificates">
                        <ul>
                        <li><img src={ftc} alt="Flatiron School course completion certificate" /></li>
                        <li><img src={wta} alt="Award at Wipro Technologies" /></li>
                        <li><a href="https://www.testdome.com/cert/6eefde08b0e140a5a000b30d5c6682f6" class="testdome-certificate-stamp silver" target="_blank"><img src={dome} alt="test Dome certificate" /></a></li>
                        </ul>
                    </div>
                    
                </div>
                <br/>
                <hr/>

            </div>
        </div>
        
    )
}

export default Profession;