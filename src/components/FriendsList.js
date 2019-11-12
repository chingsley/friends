import React from 'react';
import Friend from './Friend';
import {
  Container, Row, Col
} from 'reactstrap';


class FriendsList extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col className="card-container">
            {this.props.friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FriendsList;
