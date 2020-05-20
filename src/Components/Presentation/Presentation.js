import React from 'react';
import d1 from './d2.jpg';
import '../StyleComponents.css';

function Presentation(){
    return(
        <div className="Presentation-content">
           
           <div className="Question">WHEN I'M NOT CODING, YOU CAN FIND ME HERE .. </div>
           
           <div className="content-message">
           <div className="project-description">
                <p>I'm a Bharatanatyam Dancer. Under the guidance of my Guru Kalaimamani Smt Ranganayaki Jayaraman, I started learning 
                Bharatanatyam dance from my age of 5. With tremendous training I did my Arangetram in 2007 in honors of Kalaimamani
                Sudharani Raghupathy, Dr. Jayanthi Subramanium, Actress Sukunya and Shobhana.</p>
                
                <center><img src={d1} alt="dance pic"/></center>

                <p>In India,I was conducting classes and training children on their Arangetram. I also performed in various
                group concerts and travelled to various places for performances. </p>
                
                <p>Presently I'm doing my Master of Fine Arts Degree in Bharatanatyam from Annamalai University,India.</p>

                <p>Apart from dancing, I also love to cook. After marriage I started trying many new recipes and 
                    recorded them.</p>
                    </div></div>
                <p>Do you like my page ? <button><i class="fa fa-thumbs-up"></i></button></p>
           <br/><br/>
        </div>
    )
}
export default Presentation;