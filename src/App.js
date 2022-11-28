import './App.css';
import NavBar from './Homepage/NavBar';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Switch }
  from "react-router-dom";

import About from './Homepage/Aboutus';
import Home from './Homepage/Home'
import Skills from './Homepage/Skills';
import Education from './Homepage/Education';
import Traning from './Homepage/Traning';
import Projects from './Homepage/Projects';
import Certificate from './Homepage/Certificates';
import contact from './Homepage/contact';
import exp from './Homepage/experience';

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about'component={About} />
      <Route exact path='/skills'component={Skills} />
      <Route exact path='/education'component={Education} />
      <Route exact path='/traning'component={Traning} />
      <Route exact path='/projects'component={Projects} />
      <Route exact path='/exp'component={exp} />
      <Route exact path='/certificates'component={Certificate} />
      <Route exact path='/contact'component={contact} />


    </Switch>
    </Router>
    </>
    
  );
}

export default App;
