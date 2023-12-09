import React from "react";
import Card from "react-bootstrap/Card";

function WorkExperienceCard({ imgPath, companyName, position, description, duration }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" className="worklogo"  src={imgPath} alt={`${companyName} Logo`} />
      <Card.Body>
        <Card.Title>{companyName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"  style={{color:"white"}}><strong className="purple">{position} </strong> </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{duration}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WorkExperienceCard;
