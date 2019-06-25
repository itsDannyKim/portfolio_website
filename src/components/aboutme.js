import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import pHeadshot from '../images/profHeadshot.jpg';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return(
        <Grid className="aboutme-grid">
          <Cell col={7}>
            <h1 style={{paddingLeft: '3em'}}>About Me</h1>
            <img
              src={pHeadshot}
              alt="pHeadshot"
              style={{height: '360px', width: '360px',  paddingLeft: '10em', objectFit: 'contain'}}
              />
          </Cell>
          <Cell col={3}>
            <div className="aboutme-body">
            <h1>Who I am...</h1>
              <p>
              Hi, my name is Danny Kim.
              <br></br>
              <br></br>
              After graduating from Georgia State University with a
              Computer Information Systems degree, I started working as a consultant with KPMG to
              help businesses and people succeed through technology.
              <br></br>
              <br></br>
              I'm passionate about becoming the best version of yourself, physically and mentally.  In order to
              do that, I love pushing myself outside of my comfort zone and taking on challenging projects.  Coding this website
              from scratch is one of those projects.

              <br></br>
              <br></br>
              Feel free to <Link to="/contact" style={{color: ' #5fc5ee', textDecoration: 'none', fontWeight:'bold'}}>connect</Link> with me to talk!
              <br></br>
              <br></br>
              </p>
            </div>
          </Cell>
        </Grid>
    )
  }
}

export default About;
