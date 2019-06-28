import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import kimDanielHeadshot from '../images/kimDanielHeadshot.jpg';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

/*<div className="banner-text">
<div className="bottom-text-padding">*/

class Landing extends Component {
  render() {
    return(
      <div class="container-fluid" style={{}}>
          <div class= "row-3">
            <div class="col">
            <img
              src={kimDanielHeadshot}
              alt="headshot"
              className="headshot-img"
            />
            </div>
            <div class="row-3" className="banner-text">
            <a href="https://www.google.com/search?q=what+is+a+technology+consultant%3F&oq=what+is+a+technology+consultant%3F&aqs=chrome..69i57.2324j0j4&sourceid=chrome&ie=UTF-8" rel="noopener noreferrer" target="_blank">
            <h1>Technology Consultant</h1></a>
            <hr/>
            <p>HTML/CSS | Javascript | Java | SQL | MongoDB | Express | ReactJS | NodeJS  </p>
            <div className="social-links">
            {/* LinkedIn */}
            <a className="specialEffects" href="https://www.linkedin.com/in/danielkimdk/" rel="noopener noreferrer" target="_blank">
              <MDBIcon fab icon="linkedin" />
            </a>

            {/* Github */}
            <a className="specialEffects" href="https://github.com/itsDannyKim" rel="noopener noreferrer" target="_blank">
              <MDBIcon fab icon="github" />
            </a>

            {/* Instagram */}
            <a className="specialEffects" href="https://www.instagram.com/itsdannykim/?hl=en" rel="noopener noreferrer" target="_blank">
              <MDBIcon fab icon="instagram" />
              {/*<i className="fa fa-instagram" aria-hidden="true"/>*/}
            </a>

            {/* Twitter */}
            <a className="specialEffects" href="https://twitter.com/itsdannykim" rel="noopener noreferrer" target="_blank">
              <MDBIcon fab icon="twitter" />
              {/*<i class="fa fa-twitter-square" aria-hidden="true"></i>*/}
            </a>
          </div>
            </div>
          </div>
        </div>

    )
  }
}

export default Landing;
