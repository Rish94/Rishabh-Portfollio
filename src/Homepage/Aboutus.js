import React from 'react'
import NavBar from './NavBar';
import Homepage from './NavBar';
import '../Homepage/Aboutus.css'
export default function aboutus() {
  return (
    <>
    <div id="row">
      <div>
        <NavBar/>
      </div>
      <div id="aboutcontent">
        <span id="maintag">Hii !<br/>I'm a UI Designer and Frontend <br/> Developer from <span id="ind">India.</span></span>
        <p>I enjoy taking complex problems and turning them <br/>into simple 
        beautiful interface designs. I also <br/>love the logic and structure of coding and <br/>always strive to write elegant and efficient code.wheather it be <span id="ind">HTML,CSS OR JS.</span></p>
        <span id="tag2">When I'm not Coding or pushing pixels. <br/> You'll find me in the Complex for Fooding.</span>
      </div>
  </div>
    </>
  )
}



