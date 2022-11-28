import React from 'react'
import NavBar from './NavBar';
import '../Homepage/certificates.css'
import flutter from '../images/certificates/jovacflutter.jpg'
import cb from '../images/certificates/cbcoordinate.jpg'
export default function Certificates() {
  return (
    <>
    <div id="c_row">
      <div>
        <NavBar/>
      </div>
      <div id="cdata">
          
          <div id="particular_row">
              <img id="cer_image"src={flutter}></img>
              <img id="cer_image"src={cb}></img>
          </div>
          <div id="particular_row">

          </div>
          <div id="particular_row">

          </div>

      </div>
    </div>
    </>
  )
}
