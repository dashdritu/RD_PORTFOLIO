import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript,
  DiAws,
  DiGoogleCloudPlatform,
  DiDjango,
  DiDocker,
  DiLinux,
  DiMysql,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiPhp,
} from "react-icons/di";
import {
  SiFirebase,
  SiApache,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
  
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <DiPython />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <CgCPlusPlus />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiJavascript />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiAws />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiReact />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiGoogleCloudPlatform />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiMongodb />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiDjango />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiApache />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiPhp />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiGit />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiFirebase />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiDocker />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiLinux />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiJava />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiMysql />
    </Col>
  </Row>
  );
}

export default Techstack;
