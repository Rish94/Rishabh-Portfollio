import React from 'react';
import '../Homepage/homepage.css';
import logo from '../images/p-logo.png';
import image from '../images/image.png';

export default function NavBar(){
    return (
        <div id='homepage'>


            <div id='infonavbar'>
                <div id='personalinfo'>
                    <div id='imgblock'><img id='image' src={logo}></img></div>
                    <div id='name'>Rishabh Agarwal</div>
                    <div id='tagline'><span id='soft'>Software </span><span id='dev'>Developer</span></div>
                </div>
                <div class='infolinksnav'>
                    <a  href="/" id='linkbut'>HOME</a>
                    <a  href="/about" id='linkbut'>ABOUT</a>
                    <a href="/skills" id='linkbut'>SKILLS</a>
                    <a href="/education" id='linkbut'>EDUCATION</a>
                    <a href="/traning" id='linkbut'>TRANING</a>
                    <a href="/projects" id='linkbut'>PROJECTS</a>
                    <a href="/exp" id='linkbut'>EXTRA ACTIVITIES</a>
                    <a href="/certificates" id='linkbut'>CERTIFICATIONS</a>
                    <a href="/contact" id='linkbut'>CONTACT</a>
                </div>
                <div id='copyrightsection'>
                    <p>&#169; Copyright &#169;2022 All rights reserved.<br/>This WebSite made By Rishabh Agarwal.</p>
                </div>
            </div>

            


        </div>
        
    );
}



