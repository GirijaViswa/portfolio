import React from 'react';
import '../StyleComponents.css';
import b1 from './B1.png';
import b2 from './B2.png';
import b3 from './B3.png';
import b4 from './B4.png';
import b5 from './B5.png';

function About(){
    return(
        <div className="About-content">
           <div className="Main-content-pic">
                <div className="Hello">
                    <div className="Spacer">
                        Hi! &nbsp; I'm Girija
                        <p><a href="#projects"><i class="fa fa-briefcase"></i>  My Projects</a></p>
                    </div> 
                </div>

                <div id="#About" className="About-section">
                    <div className="Question">WHO AM I?</div>
                        <br/>
                        I'm Software Engineer/ Full Stack Developer and Bharatanatyam Dancer
                        <br/><br/>

                    <div className="Skill-set">
                        <div className="Question">WHAT I DO?</div><br/>
                        <div className="project-description">Here are some of my expertise .. </div><br/>
                        <div className="Skill-set-box">
                            <ul><li>
                            {/* <div className="Skill-set-logo"><img src={languages} alt="Languages Picture"/> */}
                            <h4>Programming languages</h4>
                            Ruby, Python</li>
                        
                            <li>
                            {/* <div className="Skill-set-logo"><img src={tools} alt="Languages Picture"/></div> */}
                            
                            <h4>Web Technologies</h4>
                            HTML, CSS, Javascript, React, Redux, Ruby on Rails<br/></li>

                            <li>
                            {/* <div className="Skill-set-logo"><img src={languages} alt="Languages Picture"/> */}
                            <h4>Delivery Methodologies</h4>
                            Waterfall, Agile (Scrum)</li>

                            <li>
                            {/* <div className="Skill-set-logo"><img src={languages} alt="Languages Picture"/> */}
                            <h4>SCM & Project Management Tools</h4>
                            Git, Jira</li>
                        </ul></div>
                    </div>
                </div>

                <div className="blogs"><hr/>
                    <div className="Question">MY BLOGS ...</div><br/>
                    <div className="project-description">I am not an expert in writing blogs, kindly bare me when you find some mistakes.</div>
                    <div className="blogs-display">
                        <ul>
                            <li><a href="https://medium.com/@girijavmohan/redux-is-one-of-the-hottest-libraries-in-front-end-development-these-days-redux-98d9044b695c" target="_blank"><img src={b1}/></a></li>
                            <li><a href="https://medium.com/@girijavmohan/explore-react-hooks-dbc496028783" target="_blank"><img src={b2}/></a></li>
                            <li><a href="https://medium.com/@girijavmohan/git-is-a-distributed-version-control-system-vcs-that-makes-it-easier-to-track-changes-to-files-a1cf3cf520ea" target="_blank" ><img src={b3}/></a></li>
                            <li><a href="https://medium.com/@girijavmohan/create-project-using-rails-e20101536f81" target="_blank" ><img src={b4}/></a></li>
                            <li><a href="https://medium.com/@girijavmohan/flight-boarding-management-system-fbms-644947d8c3d2" target="_blank" ><img src={b5}/></a></li>
                        </ul>
                    </div>
                </div>

                <div id="projects"><hr/>
                    <div className="Question">I'M PROUD OF ....</div><br/>
                    <div className="project-description">
                        This is my project that I did using Ruby as Rails as backend and Javascript, React and Redux as frontend.
                    </div><br/>
                    <div className="media">
                        <div className="project-description">Here is the demo of my project.</div><br/>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/U_oQsWRu6I4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div><br/>
                    <div className="media">
                        <div className="project-description">Here is the outlined code workthrough for the project.</div><br/>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/HsLJEWY1MPI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                

            </div>
        </div> 
    )
}
export default About;