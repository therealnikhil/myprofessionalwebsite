import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import faips_logo from './assets/faips-logo.jpg';
import purdue_logo from './assets/purdue-logo.png';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="wallpaper">
            <h1 className="app-title">Hi, I'm Nikhil!</h1>
          </div>
          <div className="navbar">
            <Button bsStyle="link" href="#about">About</Button>
            <Button bsStyle="link" href="#portfolio">Portfolio</Button>
            <Button bsStyle="link" href="#accolades">Accolades</Button>
            <Button bsStyle="link" href="#contact">Contact</Button>
          </div>
        </header>
        <div id="about" className="dark section">
          <Grid>
            <Col xs={12}>
              <h2>About</h2>
              <p>
              I am a highly motivated student. I was born and raised in Kuwait, and I have been coding since the age 
              of 12. Due to the lack of opportunities in my country, I came to the US for a better quality of 
              education as well as better opportunities for me to use my talent and passion in computer science. 
              I initially came to Purdue as a Computer Engineering student but realized that Computer Science is 
              better suited to my goals and talents. My long-term goal is to work for a company that uses technology 
              to empower the world, bring people together and do good in the world.
              </p>
            </Col>
            <h3>Education</h3>
            <Row>
              <Col xs={12} md={6} mdPush={6} className="education-logo">
                <img className="education-img" id="purdue-logo-img" src={purdue_logo} alt="purdue-logo" />
              </Col>
              <Col xs={12} md={6} mdPull={6} className="education-details">
                <p>Purdue University</p>
                <p>West Lafayette, IN</p>
                <p>September 2015 - Present</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} mdPush={6} className="education-logo">
                <img className="education-img" src={faips_logo} alt="faips-logo" />
              </Col>
              <Col xs={12} md={6} mdPull={6} className="education-details">
                <p>Fahaheel Al-Watanieh Indian Private School</p>
                <p>Ahmadi, Kuwait</p>
                <p>September 2001 - July 2015</p>
              </Col>
            </Row>
          </Grid>
        </div>
        <div id="portfolio" className="section"></div>
        <div id="accolades" className="dark section"></div>
        <div id="contact" className="section"></div>
      </div>
    );
  }
}