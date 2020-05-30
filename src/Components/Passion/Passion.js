import React from 'react';
import '../ToStyleCompo.css';
import d2 from './d2.jpg';
import KF from './kothaiFoods.jpeg'

function Passion(){
    return(
        <div className="Passion-Content">
               <h1> My Passion . . .</h1><br/>
            <div className="Passion-Content-Header">
                <img src={d2} alt="Dancing Pic "/>
                <p>
                Apart from coding, I am extremely passionate about dance especially Bharatanatyam. Since 5, I have been learning this art under the guidance of my Guru Sangeet Natak Akademi Awardee Smt <b>Ranganayaki Jayaraman</b>, the Director of <a href="https://srisaraswathygananilayam.com/" target="_blank">Sri Saraswati Gana Nilayam.</a> 
                </p>
            </div>
        <div className="Passion-Maintext">
            <p><b>“ When passion meets hard work, he/she reaps its benefits “ </b><br/>those words of hers, still echoes in my head and has remained in the hearts of all her disciples not just as a mentor but also as an inspirational figure. This drove me to complete my Arengetram
            (which is equivalent to High School Graduation in the field of Bharatanatyam) at an early age of 14, in honors of Kalaimamani Sudharani Raghupathy, Dr. Jayanthi Subramanium, legendary dancers and actors Smt Shobana and Smt  Revathy. 
            </p>
            <p>
            I have performed at various concerts held across states, even across countries. Once in 2015 I had been to Colombo, Sri lanka  with my band to showcase our skills before Swamiji Vittama.  Some other noticeable performances are Bharathamum Bhaavanaiyum at Delhi 
            and my recent performance at Sri Nataraja Temple (Nata- dance, raja - king) Chidambaram, India, in front of the lord himself, which is  perhaps the dream of every Bharatanatyam aspirant. 
            </p>
            <p>
            <b>“I believe there is no other profession in the world that is more important to society than that of a teacher.” </b><br/>Once said by APJ KALAM.So I decided to teach all my knowledge about dance to kids. So back in my homeland I started conducting classes for students 
            who were passionate about Bharatanatyam.
            </p>
            <p>
            Bharatanatyam no bounds, so did I. Being a perseverant child, I wanted to educate myself more and I am currently doing by part-time Masters In Fine Arts with Annamalai University.
            </p>

            <div className="Passion-Content-Header">
                <a href="https://www.youtube.com/channel/UCWOZSyM96xGlo6ng3ztWU_A" target="_blank"><img src={KF} alt="Kothai Foods"/></a>
                <p>
                On the other hand, I am an avid cook. I love the process of researching new recipes and testing them out. I even run my 
                    own YouTube channel "
                    <a href="https://www.youtube.com/channel/UCWOZSyM96xGlo6ng3ztWU_A" target="_blank"><b>Kothai Foods </b></a> ", 
                    where you can tune in and try out new drooling dishes. 
                
                    PS: Don’t forget to hit the subscribe button 😜.
                </p>
            </div>
        </div>
        </div>
    )
}

export default Passion;