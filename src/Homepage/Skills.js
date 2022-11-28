import React from 'react'
import NavBar from './NavBar';
import '../Homepage/Skills.css'
import bg from '../images/bgp.png';
export default function Skills() {
  return (
    <>
    <div id="row">
      <div>
        <NavBar/>
      </div>
      <div id="data">
      <div id="t-headings">Technical</div>
      <hr/>
      <ul>
              <li id="fdpr">Frontend & Backend
                  <ul id="list">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Java Script</li>
                      <li>React</li>
                      <li>SQL</li>
                      <li>Firebase</li>
                      
                  </ul>
              </li>
              <li id="fdpr">
                  Programming Language 
                  <ul id="list">
                      <li>Java</li>
                      <li>C</li>
                      <li>C++</li>
                      <li>Python</li>
                      <li>Dart</li>
                  </ul>
              </li>
          </ul>
          <div id="p-heading">Professional</div>
          <hr/>
          <ul id="list">
              <li >Effective Communication Skills.</li>
              <li>Ability to identify and solve Problems.</li>
          </ul>
      </div>
    </div>


    </>
  )
}

