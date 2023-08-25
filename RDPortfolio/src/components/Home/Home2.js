import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME TO <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a programming enthusiast who has fallen head over heels for code. I may not have mastered it all, but the journey of learning is where the magic happens🚀
              <br />
              <br />I'm fluent in classics like  
              <i>
                <b className="purple"> Python, C++, React, and AWS. </b>
                
              </i>
              <br />These languages are my palette, and I use them to create digital masterpieces that merge creativity and functionality seamlessly.
              <br />
              <br />
              Beyond that, I find myself captivated by realms of  &nbsp;
              <i>
                <b className="purple">Big Data, Cloud computing, and Cybersecurity </b> - realms where possibilities seem endless{" "}
            
              </i>
              <br />
              <br />
              Currently, I'm immersed in an exciting Udemy course, mastering <b className="purple">Angular</b> through hands-on projects. It's another exciting chapter in my endless journey of growth within the boundless tech universe..
              
              
    
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
