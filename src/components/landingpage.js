import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import kimDanielHeadshot from '../images/kimDanielHeadshot.jpg';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%' , margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img
            src={kimDanielHeadshot}
            alt="headshot"
            className="headshot-img"
          />

            <div className="banner-text">
            <h1>Technology Consultant</h1>

            <hr/>
          <p>HTML/CSS | Javascript | Java | SQL | MongoDB | Express | ReactJS | NodeJS  </p>

          <div className="social-links">

            {/* LinkedIn */}
            <a className="specialEffects" href="https://www.linkedin.com/in/danielkimdk/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"/>
            </a>

            {/* Github */}
            <a className="specialEffects" href="https://github.com/itsDannyKim" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true"/>
            </a>

            {/* Instagram */}
            <a className="specialEffects" href="https://www.instagram.com/itsdannykim/?hl=en" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true"/>
            </a>

            {/* Twitter */}
            <a className="specialEffects" href="https://twitter.com/itsdannykim" rel="noopener noreferrer" target="_blank">
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </a>


          </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
