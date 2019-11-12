import React from 'react';
import Modal2 from './ModalViewFriend';

class ModalDeleteFriend extends React.Component{
  state = {
    modal: false,
  };

  modalToggle = () => {
    this.setState({ modal: !this.state.modal })
  };

  render() {
    return (
      <div>
        {/* <button className="place-order" onClick={this.modalToggle}>
          <span className="fa fa-shopping-cart"></span>
        </button> */}
        <Modal2 onClick={this.modalToggle} status={this.state.modal} />
      </div>
    );
  }
}

export default ModalDeleteFriend;
