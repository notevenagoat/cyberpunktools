import React from "react";
<<<<<<< HEAD
import PersonalCard from "./PersonalCard";
import { linkedin, github, facebook } from "./Icons"
import { Row, Col } from 'react-bootstrap'

const people = [
  {
    name: "Ivan",
    imageSource: "https://avatars.githubusercontent.com/u/83254602?v=4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui natus sunt soluta molestias, ipsa modi, ullam maiores omnis non doloremque quos, aut fugiat quod at temporibus animi. Cumque, non minus?",
    link1: { icon: github, url: "https://github.com/notevenagoat" },
    link2: { icon: linkedin, url: "https://www.linkedin.com/in/notevenagoat/" }
  },
  {
    name: "Bhagyashree",
    imageSource: "https://avatars.githubusercontent.com/u/59786494?s=400&u=f24d607ec7cfd31619d7c91284fea089f0ecc6cf&v=4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus ducimus a velit. Sit, error architecto saepe nihil pariatur minima! Dolor accusantium dicta maxime aliquid! Iste, illo. Aliquid, laudantium exercitationem.",
    link1: { icon: github, url: "https://github.com/bhagya099" },
    link2: { icon: linkedin, url: "https://www.linkedin.com/in/bhagyashree-shakrawar/" }
  },
  {
    name: "Jose",
    imageSource: "https://avatars.githubusercontent.com/u/80198804?v=4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatibus nisi deleniti eos explicabo vel deserunt voluptas numquam! Harum ex ab consequuntur, sunt quis fugiat ducimus culpa tempore quo quisquam?",
    link1: { icon: github, url: "https://github.com/jomar1129" },
    link2: { icon: linkedin, url: "https://www.linkedin.com/in/jose-cotejo/" }
  },
  {
    name: "Meng",
    imageSource: "https://avatars.githubusercontent.com/u/20964807?v=4",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eveniet repudiandae tempora possimus modi velit reprehenderit eos accusamus, sed quis temporibus? Suscipit quidem consequatur corporis quaerat quisquam illum, vitae deleniti?",
    link1: { icon: github, url: "https://github.com/ymloh" },
    link2: { icon: linkedin, url: "https://www.linkedin.com/in/yumeng-loh/" }
  },
]

=======
import { Card } from "react-bootstrap";
>>>>>>> 430970a4c60c6053761c6cea897253f08bb65d18
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
