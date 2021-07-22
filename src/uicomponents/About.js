import React from "react";
import PersonalCard from "./PersonalCard";
import { linkedin, github, facebook } from "./Icons";
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const people = [
  {
    name: "Ivan",
    imageSource: "https://avatars.githubusercontent.com/u/83254602?v=4",
    description: "Our Team leader and coffee addict. Ivan organizes the team and delegates tasks. He is responsible for Javascript Logic and wireframing. He enjoys troubleshooting, making sure everyone understands what needs to be done. ",
    quote: "Famous quote: “I have no idea what you just did, can you explain it to me step by step”",
    link1: { icon: github, url: "https://github.com/notevenagoat" },
    link2: { icon: linkedin, url: "https://www.linkedin.com/in/notevenagoat/" }
  },
  {
    name: "Bhagyashree",
    imageSource: "https://avatars.githubusercontent.com/u/59786494?s=400&u=f24d607ec7cfd31619d7c91284fea089f0ecc6cf&v=4",
    description: "Our Bootstrap specialist, Bhagyashree brought react bootstrap into the project and is responsible for the responsiveness of most of our project. She enjoys learning CSS shorthands and always has a design trick up her sleeve. ",
    quote: "Famous quote: “Wait, I found a different way of doing it, why don't we try this...”",
    link1: { icon: github, url: "https://github.com/bhagya099" },
    link2: { icon: linkedin, url: "https://www.linkedin.com/in/bhagyashree-shakrawar/" }
  },
  {
    name: "Jose",
    imageSource: "https://avatars.githubusercontent.com/u/80198804?v=4",
    description: "The fastest coder out of the group, Jose likes trying out new frameworks and libraries to make everything work.. You guessed it, FASTER!. He also enjoys working on the Javascript logic part of the project.",
    quote: "Famous quote “Yeah no problem I’ll do it..*click click click*  Ok it’s done!”",
    link1: { icon: github, url: "https://github.com/jomar1129" },
    link2: { icon: linkedin, url: "https://www.linkedin.com/in/jose-cotejo/" }
  },
  {
    name: "Meng",
    imageSource: "https://avatars.githubusercontent.com/u/20964807?v=4",
    description: "Our ReactJs specialist of the team, Meng likes refactoring code and making everything efficient. He is very good at explaining to the team new concepts, and always wants to make things better.",
    quote: "Famous quote: “I don’t think this is going to work, oh, wait, it worked!”",
    link1: { icon: github, url: "https://github.com/ymloh" },
    link2: { icon: linkedin, url: "https://www.linkedin.com/in/yumeng-loh/" }
  },
]

const About = () => {
  return (
    <div className="about-container" >
      <Container>
      <p>We are a group of 4 developers who graduated  in July 2021 from the same Web Developer coding bootcamp, but we love working together and decided to create this project to stay in touch, practice and share all the new things we learn as we dive into our new careers!. Connect with us on Linkedin and/or follow our Github to see what other craziness we get up to!.</p>
      <Row>
        {people.map(person =>
          <Col xl={6} xxl={3} className="col-xxl-3 py-5 text-center d-flex justify-content-center">
            <PersonalCard
              key={person.name}
              name={person.name}
              imageSource={person.imageSource}
              description={person.description}
              quote={person.quote} 
              link1={person.link1}
              link2={person.link2}
            />
          </Col>
        )}
      </Row>
      </Container>
    </div>
  );
};

export default About;
