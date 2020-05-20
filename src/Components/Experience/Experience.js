import React from 'react';
import '../StyleComponents.css';
import wipro from './wipro-logo.jpg';
import ft from './ft.png';

function Experience(){
    return(
        <div className="Experience-content">
            <div className="Main-Comp-Content">
                <div className="Expt"> HIGHLIGHTS</div><br/>
                <div className="VLine">
            
                        <ul>
                             <div className="logo">
                                <img src={wipro} alt="Move Inc"/>
                            </div>
                            <div className="Content-box1">
                                
                            <li>Worked for Clients National Grid and Standard Bank of South Africa
                            <ul>
                                <li>Trained and worked on SAP ABAP scripts</li>
                                <li>Generated Smartforms, Reports, Forms</li>
                                <li>Worked on Exits, BAPI, LSMW</li>
                                <li>Made Performance Tuning functionalities using ST05 and other tcodes.</li>
                                <li>Developed requirements document, user report, test case documents for the respective programs created.</li>
                            </ul></li></div> <br/>

                            <div className="logo">
                                <img src={ft} alt="Move Inc"/>
                            </div>
                            <div className="Content-box2">
                            <li>Attended Immersive Coding Bootcamp
                                <ul>
                                <li>Worked on building Single Page Applications using React and Redux</li>
                                <li>Created SPA using Babel transpiler and Webpack bundler.</li>
                                <li>Experienced in working with many APIs like edumam, tropicalfruitandveg, US Restaurants Menus.</li>
                                <li>Worked on integrating third-party payment module - Stripe Checkout </li>
                                <li>Modeled database schema with ActiveRecord, Postgres and Ruby on Rails.</li>
                                <li>Process of Authentication using encrypted tokens via JWT</li>
                                
                                </ul></li>
                             </div><br/>

                            

                        </ul>
                    
                </div>
            </div>
        </div>
    )
}
export default Experience;