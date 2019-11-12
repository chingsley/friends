import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal2 from './modal/ModalViewFriend';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Friend extends React.Component {
  state = {
    modal: false,
  };

  modalToggle = () => {
    this.setState({ modal: !this.state.modal })
  };

  render() {
    const friend = this.props.friend;
    return (
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
          <Link className="btn btn-info" to={`/friends/${friend.id}/edit`}>Edit</Link>{' '}
          {/* <Link className="btn btn-secondary" to={`/friends/${friend.id}/delete`}>Delete</Link> */}
          <Button className="btn" color="warning" onClick={this.modalToggle}>View</Button>
        </CardBody>
        <Modal2 
          onClick={this.modalToggle}
          status={this.state.modal}
          friend={friend}
        />
      </Card>
    );
  }
};

Friend.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  })
}

Friend.defaultProps = {
  friend: {
    id: 0,
    name: 'Anonymous',
    age: 53,
    email: 'Anonymous@gmail.com',
    image: 'picsum.photos/500/500',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. At quis risus sed vulputate odio. Sed risus ultricies tristique nulla. Purus non enim praesent elementum. Quis eleifend quam adipiscing vitae proin sagittis. Amet massa vitae tortor condimentum lacinia qui',
  }
}

export default Friend;
