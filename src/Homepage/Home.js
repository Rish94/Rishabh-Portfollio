import React from 'react'
import '../Homepage/Home.css'
import NavBar from './NavBar';
import About from './Aboutus';
import image from '../images/image.png';
export default function () {
  return (
    
    <div id="row1">
    <div>
      <NavBar/>
    </div>
    <div id='personal'>
                    I am <br/>
                    a <span id='dev'>Developer</span> ...<br/>
                    <a href='/about' id='viewportfolio'>VIEW PORTFOLIO &rarr;</a>
                </div>

                <div id = 'myimage'>
                    <img  id='myimage'src={image}></img>
                </div>

      </div>
    
  )
}
