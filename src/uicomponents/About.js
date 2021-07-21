import React from "react";
import { Card } from "react-bootstrap";
const About = () => {
  return (
    <div className="about-container" >
      <Row>
        {people.map(person =>
          <Col xl={6} xxl={3} className="col-xxl-3 py-5 text-center d-flex justify-content-center">
            <PersonalCard
              key={person.name}
              name={person.name}
              imageSource={person.imageSource}
              description={person.description}
              link1={person.link1}
              link2={person.link2}
            />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default About;
