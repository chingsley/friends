import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

const a = document.querySelector('body');
console.log(a);

const FriendsList = (props) => {
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
                {friend.description.length > 104 ?
                    friend.description.slice(0, 104) + '...' :
                    friend.description}
                </CardText>
                <Link className="btn btn-secondary" to={`/friends/${friend.id}/edit`}>Edit</Link>{' '}
                <Link className="btn btn-secondary" to={`/friends/${friend.id}/delete`}>Delete</Link>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FriendsList;
