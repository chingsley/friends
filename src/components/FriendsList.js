import React from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const FriendsList = (props) => {
  console.log(props.friends)
  return (
    <Container>
      <Row>
        <Col className="card-container">
          {props.friends.map(friend => (
            <Card key={friend.id}>
              <CardBody>
                <CardTitle>
                  <h5>{friend.name}</h5>
                  <h5 className="age-field">age: {friend.age}</h5>
                </CardTitle>
                <CardSubtitle><h6>{friend.email}</h6></CardSubtitle>
                <CardImg className="card-img" top width="100%" src={friend.image} alt="Card image cap" />
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum animi natus facilis placeat veritatis, ...
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FriendsList;
