import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import logo from './logo.svg';
//import faips_logo from './assets/faips-logo.jpg';
//import purdue_logo from './assets/purdue-logo.png';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: PropTypes.oneOf([0, 1, 2, 3, 4])
    }
  }
  toggleSection(clickedSection) {
    this.setState({
      clicked: clickedSection
    })
  }
  slideUpSectionDetais(clickedSection) {
    var d = document.getElementById(`section-detail-${clickedSection}`);
    d.className = "section-detail up";
  }
  slideDownSectionDetails(clickedSection) {
    var d = document.getElementById(`section-detail-${clickedSection}`);
    d.className = "section-detail down";
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <span className="app-title">Hi, I'm Nikhil!</span>
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <Grid className="fixed-container">
          <Row>
            <Col 
              id="about" 
              onMouseEnter={() => this.slideUpSectionDetais(1)} 
              onMouseLeave={() => this.slideDownSectionDetails(1)} 
              onClick={() => this.toggleSection(1)} 
              className="main-section" 
              md={3}
            >
              <div id={this.state.clicked === 1 ? "active-1" : "inactive-1"}>
                <div id="section-detail-1" className="section-detail">
                {
                  this.state.clicked === 1 && 
                  <div>
                  </div>
                }
                </div>
              </div>
            </Col>
            <Col 
              id="portfolio" 
              onMouseEnter={() => this.slideUpSectionDetais(2)} 
              onMouseLeave={() => this.slideDownSectionDetails(2)} 
              onClick={() => this.toggleSection(2)} 
              className="main-section" 
              md={3}
            >
              <div id={this.state.clicked === 2 ? "active-2" : "inactive-2"}>
                <div id="section-detail-2" className="section-detail">
                {
                  this.state.clicked === 2 && 
                  <div>
                  </div>
                }
                </div>
              </div>
            </Col>
            <Col 
              id="interests" 
              onMouseEnter={() => this.slideUpSectionDetais(3)} 
              onMouseLeave={() => this.slideDownSectionDetails(3)} 
              onClick={() => this.toggleSection(3)} 
              className="main-section" 
              md={3}
            >
              <div id={this.state.clicked === 3 ? "active-3" : "inactive-3"}>
                <div id="section-detail-3" className="section-detail">
                {
                  this.state.clicked === 3 && 
                  <div>
                  </div>
                }
                </div>
              </div>
            </Col>
            <Col 
              id="contact" 
              onMouseEnter={() => this.slideUpSectionDetais(4)} 
              onMouseLeave={() => this.slideDownSectionDetails(4)} 
              onClick={() => this.toggleSection(4)} 
              className="main-section" 
              md={3}
            >
              <div id={this.state.clicked === 4 ? "active-4" : "inactive-4"}>
                <div id="section-detail-4" className="section-detail">
                {
                  this.state.clicked === 4 && 
                  <div>
                  </div>
                }
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

/*

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
*/