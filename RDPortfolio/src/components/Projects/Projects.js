import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import fyp from "../../Assets/Projects/p1.png";
import money from "../../Assets/Projects/p2.png";
import sip from "../../Assets/Projects/p3.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Recent Projects <strong className="purple">Showcase</strong>
        </h1>
        <p style={{ color: "white" }}>
        Uncover a glimpse of the exciting projects I've been a part of
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
  imgPath={fyp}
  isBlog={false}
  title={<span style={{ color: "purple", fontWeight: "bold" }}>IntelliCast</span>}
  description="My Final Year Project, a voice-controlled application delivering real-time news updates and weather information upon user requests. The project leverages APIs including News API and OpenWeatherMap API for data sourcing. The front-end is built with React, JavaScript, CSS, and HTML, while the integration of voice control is achieved through Alan AI Studio."
  ghLink="https://github.com/dashdritu/IntelliCast-"
  demoLink="https://intellicast.netlify.app/"
/>

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={money}
              isBlog={false}
              title={<span style={{ color: "purple",fontWeight: "bold" }}>Budgetz</span>}
              description=" A budgeting and expense tracking app is the perfect solution for anyone struggling to manage their finances.
              One of the key features of our app is its ability to automatically categorize your expenses, making it easy to see where your money is going. At the core of our stack is React Native and MongoDB Atlas as  backend infrastructure.  
              "
              ghLink="https://github.com/dashdritu/budgetz"
              demoLink="budgetz.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sip}
              isBlog={false}
              title={<span style={{ color: "purple",fontWeight: "bold" }}>Photogram</span>}
              description=" Photogram is a dynamic social media platform developed with Django and Python. It covers a wide array of features, from account creation, sign-in, and profile customization, including profile pictures, bios, and locations. Users can upload posts, interact by liking, following, and unfollowing users, and download posts."
              ghLink="https://github.com/dashdritu/photogram-22"
              demoLink="https://www.youtube.com/watch?v=W1x8qavHDjc&t=121s"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Face Detector"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
