import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import gv1 from './images/GV-closeup.jpeg';
import About from './Components/Home/About.js'
import Experience from './Components/Experience/Experience.js';
import Presentation from './Components/Presentation/Presentation.js';
import 'font-awesome/css/font-awesome.min.css';

function App() {

  return (
    <div className="App">
      <Router>
      <div className="Side-bar">
        <div className="Side-bar-img">
          <p>Shri RamaJayam</p>
          <img src={gv1} alt="Girija's pic"></img>
          <div className="title"><b>Girija Viswanathan</b></div><br/>
          <i className="fa fa-envelope-o"></i> &nbsp;girijavmohan@gmail.com<br/>
          <div className="links">
              <ul>
              <center><li><Link to="/about" className="Links">About</Link></li></center><br/>
              <center><li><Link to="/experience" className="Links">Experience</Link></li></center><br/>
              <center><li><Link to="/myinterest" className="Links">My Interest</Link></li></center><br/>
              </ul>
          </div>
          <div className="Side-bar-footer">
            <ul>
              <li><a href="https://www.linkedin.com/in/girijaviswa" target="_blank"><i class="fa fa-linkedin"></i></a></li>&nbsp;&nbsp;
              {/* <li><a href=""><i class="fa fa-github"></i></a></li>&nbsp;&nbsp;
              <li><a href=""><i class="fa fa-facebook-f"></i></a></li>&nbsp;&nbsp; */}
            </ul>
          </div>
        </div>
      </div>

      <div className="Main-content">
        
        <Switch>
          <Route exact path="/about" component={About} active/>
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/myinterest" component={Presentation} />
          <Route path="/" component={About} />
        </Switch>

      </div>
      </Router>
    </div>
  );
}

export default App;
