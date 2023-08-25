import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there! I am <span className="purple">Ritu Dash </span>
            hailing from the vibrant city of <span className="purple"> Mumbai, India.</span>
            <br /> Armed with a degree in Computer Science and Engineering from Amity University Mumbai, I've set out to conquer the world of tech.
            {/* <br />
            Additionally, I am currently employed as a software developer at
            Juspay.
            <br /> */}
            <br />
            Beyond the realm of creating digital marvels, I'm a fervent explorer of diverse hobbies that add color and depth to my world:
          </p>
          <ul>
            <li className="about-activity">
            📚 Reading self-help books to nourish my mind.
            </li>
            <li className="about-activity">
            🎥 Watching self-development videos by @thewizardliz, @tamkaur, and @persephonesmind.
            </li>
            <li className="about-activity">
            ✍️ Writing and embracing the rhythm of songs.
            </li>
            <li className="about-activity">
            💪 A fitness enthusiast, I frequent the gym, practice yoga, and prioritize clean eating. 
            </li>
            <li className="about-activity">
            🎨 Letting my imagination flow onto paper through sketches that bring my creativity to life.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "She would make herself a reckoning, she would RISE!"{" "}
          </p>
          <footer className="blockquote-footer">RD</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
