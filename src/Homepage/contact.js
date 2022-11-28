import React from 'react'
import NavBar from './NavBar';
import '../Homepage/contact.css'
import linkdin from '../images/linkdin.png';
import Github from '../images/github.png';
export default function contact() {
  return (
    <>
    <div id="row">
      <div>
        <NavBar/>
      </div>
      <div id="dataemail">
        <span id="contactinfo">Email : <a id="mail" href='mailto:rishabhagarwal8444@gmail.com'>rishabhagarwal8444@gmail.com</a></span><br/>
        <a href="https://www.linkedin.com/in/rishabh-agarwal-a9a7b2203"><img id="imagecontact1"src={linkdin}></img></a>
      </div>
      </div>
    </>
  )
}
