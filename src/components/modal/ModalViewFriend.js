import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import ModalDeleteFriend from './ModalDeleteFriend';
import './modalViewFriend.sass';

class Modal2 extends React.Component {
  state = {
    deleteModalStatus: false,
  }

  toggleDeleteModalStatus = () => {
    this.setState(prevState => ({ deleteModalStatus: !prevState.deleteModalStatus}))
  }

  render() {
    return (
      <div className="modal" data-status={this.props.status}>
        <div className="modal-left">
          <span className="price-tag">{this.props.friend.age}</span>
          <img className="img-view-friend" src={this.props.friend.image} alt="this friend" />
        </div>
        <div className="modal-right">
          <h2>{this.props.friend.name}</h2>
          <p>{this.props.friend.description}</p>
          <button onClick={this.props.closeModal} className="close">
            <span className="fa fa-close"></span>
          </button>
          <div>
            <Link className="btn btn-info" to={`/friends/${this.props.friend.id}/edit`}>Edit</Link>{' '}
            <Button
              className="btn-modal btn-delete"
              color="danger"
              onClick={this.toggleDeleteModalStatus}
            >
                Delete
            </Button>
          </div>
        </div>
        <ModalDeleteFriend
          friend={this.props.friend}
          status={this.state.deleteModalStatus}
          toggleDeleteModalStatus={this.toggleDeleteModalStatus}
        />
      </div>
    );
  }
}

Modal2.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  })
}

Modal2.defaultProps = {
  friend: {
    id: 0,
    name: 'Anonymous',
    age: 53,
    email: 'Anonymous@gmail.com',
    image: 'picsum.photos/500/500',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. At quis risus sed vulputate odio. Sed risus ultricies tristique nulla. Purus non enim praesent elementum. Quis eleifend quam adipiscing vitae proin sagittis. Amet massa vitae tortor condimentum lacinia qui',
  }
}

export default Modal2;
