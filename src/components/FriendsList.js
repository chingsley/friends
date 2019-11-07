import React from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck
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
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardImg className="card-img" top width="100%" src="https://images.unsplash.com/photo-1572708609022-9689cecb4218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=318&q=60" alt="Card image cap" />
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
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
