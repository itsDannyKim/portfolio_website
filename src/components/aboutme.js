import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import pHeadshot from '../images/profHeadshot.jpg';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return(
      <div class="container-fluid" style={{}}>
          <div class= "row justify-content-md-center" style={{paddingTop: '5vw'}}>
            <div class="col-md-3 mr-5">
            <h1 style={{fontWeight:'bold'}}><mark style={{backgroundColor:'black', color:'white',opacity: '.8'}}>About Me</mark></h1>
            <img
              className="pHeadshot-img"
              src={pHeadshot}
              alt="pHeadshot"
              />
            </div>
            <div class="col-md-3">
            <div className="aboutme-body">

            <br></br>
            <h1>Who I am...</h1>
              <p>
              Hi, my name is <mark style={{color:'black', backgroundColor:'#FAEBD7', fontWeight:'bold'}}>Danny Kim.</mark>
              <br></br>
              <br></br>
              After graduating from Georgia State University with a
              Computer Information Systems degree, I started working as a consultant with KPMG to
              help businesses and people succeed through technology.
              <br></br>
              <br></br>
              I'm <mark style={{color:'black', backgroundColor:'#FAEBD7', fontStyle:'italic'}}>passionate</mark> about becoming the best version of yourself, physically and mentally.  In order to
              do that, I love pushing myself outside of my comfort zone and taking on challenging projects.  Coding this website
              from <mark style={{color:'black', backgroundColor:'#FAEBD7', fontStyle:'italic'}}>scratch</mark> all the way from front-end to the back-end is one of those challenges.

              <br></br>
              <br></br>
              If you have any questions or want to start a conversation, feel free to <Link to="/contact" style={{color: '#8ce5f3  ', textDecoration: 'none', fontWeight:'bold'}}>connect</Link> with me!
              <br></br>
              <br></br>
              </p>
            </div>
            </div>
          </div>
      </div>
    )
  }
}

export default About;
