import React from 'react'
import { Card } from 'react-bootstrap'

function PersonalCard(props) {
  return (
    <Card bg="dark" style={{ width: '24rem' }} >
      <Card.Img variant="top" src={props.imageSource} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className="people-text">
          {props.description}
        </Card.Text>
        <Card.Link href={props.link1.url} target="_blank" className="text-white">{props.link1.icon}</Card.Link>
        <Card.Link href={props.link2.url} target="_blank" className="text-white">{props.link2.icon}</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default PersonalCard
