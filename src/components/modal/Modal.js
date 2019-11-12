import React from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class Modal extends React.Component {
  state = {
    friendToDelete: {
      id: '',
      name: '',
      age: '',
      image: '',
      description: '',
    },
  }
  componentDidMount() {
    const friends = JSON.parse(localStorage.getItem('friends'));
    const paramId = this.props.match.params.friendId;
    const friendToDelete = friends.find(frnd => `${frnd.id}` === `${paramId}`)
    this.setState({ friendToDelete });
  }

  render() {
    const friend = this.state.friendToDelete;
    return (
      <div>
        <Container>
          <Row>
            <Col className="card-container">
              <Card>
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
                  <Button className="btn btn-secondary">Cancel</Button>{' '}
                  <Button className="btn btn-secondary">Proceed</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default Modal;

