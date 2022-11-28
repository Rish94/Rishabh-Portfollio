import React from 'react'
import '../Homepage/Education.css'
import NavBar from './NavBar';
export default function Education() {
  return (
    <>
    <div id="row">
        <div>
        <NavBar/>
      </div>
      <div>
        <ul id="edu">
            <li>Bachelor of Technology, GLA University, Mathura <br/><span id="date">(2020 - Present)</span></li>
            <li>Intermediate, St. Andrews Sr. Sec. School , Agra <br/><span id="date">(2019 - 2020)</span></li>
            <li>High School, St. Andrews Sr. Sec. School , Agra <br/><span id="date">(2017 - 2018)</span></li>
        </ul>

      </div>

    </div>
    </>
  )
}
