// Projects.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import WorkExperienceCard from "./WorkExperienceCard";

// Import project images
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";
import suicide from "../../Assets/Projects/suicide.png";
import intellilogo from "../../Assets/Projects/webtitle.png";
import sarvmLogo from "../../Assets/Projects/sarvmpage.png";


function Projects() {
  const projectData = [
    {
      imgPath: chatify,
      isBlog: false,
      title: "AMAZON Clone web page",
      description: " It is clone of Amazon shopping website made using React.js where user can select their product in basket and from basket go to payment also Login and authentication done by firebase",
      ghLink: "https://github.com/vikashsingh-ui/E-comAmazone",
      demoLink: "https://thriving-jelly-c65aec.netlify.app/"
    },
    {
      imgPath: chatify,
      isBlog: false,
      title: "Netflix Clone web page",
      description: "It is clone of Netflix web application made using react.js and TMDB API , user can watch movies trailer in a popup it its available on youtube",
      ghLink: "https://github.com/vikashsingh-ui/netflix-clone",
      demoLink: "https://jade-churros-53aec2.netlify.app/"
    },
    {
      imgPath: chatify,
      isBlog: false,
      title: "Quize web(MERN)",
      description: "It is a web page  in which user can login and select any category and take a short test and see result (MERN Stack)",
      ghLink: "https://github.com/vikashsingh-ui/MERN_Quiz",
      demoLink: "https://singular-stroopwafel-62cfba.netlify.app/"
    },
    {
      imgPath: chatify,
      isBlog: false,
      title: "Slack Chat web",
      description: "It is Real time chat application made using react where user can interact with each other personally or in a group For data storing",
      ghLink: "https://github.com/vikashsingh-ui",
      demoLink: "https://slack-clone-f7452.web.app/"
    },
    // Add similar objects for other projects
  ];

  const workExperienceData = [
    {
      imgPath: intellilogo,
      companyName: "IntelliEdtech",
      position: "Full Stack Developer",
      description: "I pioneered the transformation of education technology by concurrently managing frontend and backend development. Utilizing React Native for the frontend, I designed an intuitive interface with a dynamic content panel. On the backend, a robust Node.js server, MongoDB database, and a microservices architecture orchestrated by a load balancer ensured optimal scalability. The Teacher App introduced innovative features, fostering real-time connectivity, batch creation, and even e-commerce capabilities for selling educational resources. This project exemplified my proficiency in full-stack development and a commitment to revolutionizing education through cutting-edge technology.",
      duration: "August 2023 - Present",
    },
    {
      imgPath: sarvmLogo,
      companyName: "Sarvm.ai",
      position: "Software Engineer",
      description: "I played a key role in developing web applications and cross-platform apps for household, retailer, and logistic management using Ionic, Angular, and Node.js. My contributions encompassed crucial features such as user management, efficient delivery tracking, seamless retailer-to-logistic app integration, and dynamic delivery charge configuration. This involved leveraging the capabilities of Ionic for versatile cross-platform applications, Angular for robust frontend interfaces, and Node.js for scalable backend services. My focus on enhancing user experiences and optimizing logistics underscored my commitment to delivering impactful solutions in the dynamic realm of web and app development",
      duration: "January 2022 - July 2023",
    },
    // Add similar objects for other work experiences
  ];


return (
  <Container fluid className="project-section">
    <Particle />
    <Container>

      {/* Work Experience Section */}
      <h1 className="project-heading">
        Work <strong className="purple">Experience</strong>
      </h1>
      <p style={{ color: "white" }}>
        My Recent <strong className="purple">Works </strong>
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {workExperienceData.map((experience, index) => (
          <Col key={index} md={6} className="project-card">
            <WorkExperienceCard {...experience} />
          </Col>
        ))}
      </Row>


      <h1 style={{ color: "white" }}>
        Here are a few projects I've worked on recently.
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {projectData.map((project, index) => (
          <Col key={index} md={3} className="project-card">
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>



    </Container>
  </Container>
);
}

export default Projects;
