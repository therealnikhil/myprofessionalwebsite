import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
//import faips_logo from './assets/faips-logo.jpg';
//import purdue_logo from './assets/purdue-logo.png';
import './App.css';

const quotes = [
  {
    quote: "For to everyone who has will more be given, and he will have an abundance. But from the one who has not, even what he has will be taken away",
    author: "Matthew 25:29"
  },
  {
    quote: "The significant problems we face cannot be solved at the same level of thinking we were at when we created them",
    author: "Albert Einstein"
  },
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit",
    author: "Aristotle"
  }
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: PropTypes.oneOf([0, 1, 2, 3, 4]),
      activeQuoteId: PropTypes.number
    }
  }
  componentWillMount() {
    this.setState({
      activeQuoteId: Math.floor(Math.random() * quotes.length)
    });
  }
  toggleSection(clickedSection) {
    this.setState({
      clicked: clickedSection
    });
    var i;
    for (i = 1; i < 5; i++) {
      if (i !== clickedSection) {
        var d = document.getElementById(`main-section-${i}`);
        d.className = "main-section hide";
      }
    }
    var d = document.getElementById(`main-section-${clickedSection}`);
    d.className = "main-section zoom";
    d = document.getElementById("quote-slider");
    d.className += " remove";
    d = document.getElementById("bg-div");
    d.className += " remove";
  }
  slideUpSectionDetais(clickedSection) {
    var d = document.getElementById(`section-detail-${clickedSection}`);
    d.className = "section-detail up";
    var i;
    if (clickedSection === 1) i = 'b';
    else if (clickedSection === 2) i = 'o';
    else if (clickedSection === 3) i = 'l';
    else i = 'd';
    d = document.getElementById(`tile-letter-${i}`);
    d.className = "tile-letter up";
  }
  slideDownSectionDetails(clickedSection) {
    var d = document.getElementById(`section-detail-${clickedSection}`);
    d.className = "section-detail down";
    var i;
    if (clickedSection === 1) i = 'b';
    else if (clickedSection === 2) i = 'o';
    else if (clickedSection === 3) i = 'l';
    else i = 'd';
    d = document.getElementById(`tile-letter-${i}`);
    d.className = "tile-letter down";
  }
  nextQuote() {
    let currentQuoteId = this.state.activeQuoteId;
    this.setState({
      activeQuoteId: (currentQuoteId + 1) % quotes.length
    })
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <span className="app-title">Hi, I'm Nikhil!</span>
        </header>
        <div className="fixed-container">
          <div id="bg-div">
            <div 
              id="main-section-1" 
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
                  <p className="tile-desc">
                    The story of where I come from, and how I left the tiny country I was born and raised in 
                    for one of the most prestigious universities in the world.
                  </p>
                </div>
                <span className="tile-letter" id="tile-letter-b">B
                    <span className="tile-title">eginnings</span>
                  </span>
              </div>
            </div>
            <div 
              id="main-section-2" 
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
                  <p className="tile-desc">
                      The skills, work experience and personality traits I have acquired along my path to 
                      excellence in the corporate world.
                    </p>
                </div>
                <span className="tile-letter" id="tile-letter-o">O
                  <span className="tile-title">ccupation</span>
                </span>
              </div>
            </div>
            <div 
              id="main-section-3" 
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
                  <p className="tile-desc">
                      The hobbies that have shaped me as a unique individual, intellectually, socially and 
                      culturally, which include travelling around the world.
                    </p>
                </div>
                <span className="tile-letter" id="tile-letter-l">L
                  <span className="tile-title">eisure</span>
                </span>
              </div>
            </div>
            <div 
              id="main-section-4" 
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
                  <p className="tile-desc">
                    The digital footprint, including links to networking platforms 
                    for anyone to learn more about me or contact me from anywhere in the world.
                  </p>
                </div>
                <span className="tile-letter" id="tile-letter-d">D
                  <span className="tile-title">iscover</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="quote-slider">
          <div>
            <p className="quotation"> { quotes[this.state.activeQuoteId].quote } </p>
            <p> { quotes[this.state.activeQuoteId].author } </p>
          </div>
          <div className="quote-slider-pages">
          {
            quotes.map((currentQuote, currentQuoteIndex) => {
              return (
                <div className={`quote-slider-page ${ currentQuoteIndex === this.state.activeQuoteId ? "active" : "inactive"}`} />
            )})
          }
          </div>
        </div>
      </div>
    );
  }
}

/*
<img src={logo} className="app-logo" alt="logo" />
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