import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import gv1 from './images/GV-closeup.jpeg';
import About from './Components/Home/About.js'
import Profession from './Components/Profession/Profession.js';
import Passion from './Components/Passion/Passion.js';
import 'font-awesome/css/font-awesome.min.css';

function App() {

  return (
    <div className="App">
      <Router>
      <div className="Side-bar">
        <div className="Side-bar-img">
          <p hidden>Shri RamaJayam</p>
          <img src={gv1} alt="Girija's pic"></img>
          <div className="title"><b>Girija Viswanathan</b></div><br/>
          {/* <i className="fa fa-envelope-o"></i> &nbsp;girijavmohan@gmail.com<br/> */}
          <div className="links">
              <ul>
              <center><li><Link to="/portfolio/about" className="Links">About</Link></li></center><br/>
              <center><li><Link to="/portfolio/profession" className="Links">Profession</Link></li></center><br/>
              <center><li><Link to="/portfolio/passion" className="Links">Passion</Link></li></center><br/>
              </ul>
          </div>
          <div className="Side-bar-footer">
            <ul>
              <li><a href="https://www.linkedin.com/in/girijaviswa" target="_blank"><i class="fa fa-linkedin"></i></a></li>&nbsp;&nbsp;
              <li><a href="mailto:girijavmohan@gmail.com" target="_blank"><i className="fa fa-envelope-o"></i></a></li>&nbsp;&nbsp;
              {/* <li><a href=""><i class="fa fa-github"></i></a></li>&nbsp;&nbsp;
              <li><a href=""><i class="fa fa-facebook-f"></i></a></li>&nbsp;&nbsp; */}
            </ul>
          </div>
        </div>
      </div>

      <div className="Main-content">
        
        <Switch>
          <Route exact path="/portfolio/about" component={About} active/>
          <Route exact path="/portfolio/profession" component={Profession} />
          <Route exact path="/portfolio/passion" component={Passion} />
          <Route path="/" component={About} />
        </Switch>

      </div>
      </Router>
    </div>
  );
}

export default App;
