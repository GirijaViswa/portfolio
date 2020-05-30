import React from 'react';
import '../ToStyleCompo.css';
// import Slider from './Slider.js';
import SimpleImageSlider from "react-simple-image-slider";
import b1 from './Blogs-pic/B1.png';
import b2 from './Blogs-pic/B2.png';
import b3 from './Blogs-pic/B3.png';
import b4 from './Blogs-pic/B4.png';
import b5 from './Blogs-pic/B5.png';

const images = [
    {url: b1 },
    {url: b2 },
    {url: b3 },
    {url: b4 },
    {url: b5 }
];
// const images = [
//     'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
//     'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
//     'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
//     'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
//   ]

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

{/* Blogs */}
                <div className="Blogs-Section">
                    <h3>My Blogs</h3>
                {/* Image Slider */}
                <div className="Blogs-Section-Content">
                    <div className="Image-Slider">
                        <SimpleImageSlider width={800} height={504} images={images} />
                    </div>
                    <div className="Links">
                        Read them here 👇<br/>
                        <a href="https://medium.com/@girijavmohan/redux-is-one-of-the-hottest-libraries-in-front-end-development-these-days-redux-98d9044b695c" target="_blank">Redux</a><br/>
                        <a href="https://medium.com/@girijavmohan/explore-react-hooks-dbc496028783" target="_blank">Explore React Hooks</a><br/>
                        <a href="https://medium.com/@girijavmohan/git-is-a-distributed-version-control-system-vcs-that-makes-it-easier-to-track-changes-to-files-a1cf3cf520ea" target="_blank" >Git</a><br/>
                        <a href="https://medium.com/@girijavmohan/create-project-using-rails-e20101536f81" target="_blank" >FBMS</a><br/>
                        <a href="https://medium.com/@girijavmohan/flight-boarding-management-system-fbms-644947d8c3d2" target="_blank" >FBMS ER Modeling</a><br/>
                    </div>
                </div>
                    {/* <SimpleImageSlider width={800} height={504} images={images} /> */}
                    {/* <Slider slides={images} /> */}
                </div>
                
{/* Experience */}
            </div>
            {/* <Slider /> */}
        </div>
        
    )
}

export default Profession;