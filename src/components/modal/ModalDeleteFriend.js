import React from 'react';
import { Button } from 'reactstrap';

import './modalDeleteFriend.css';

const ModalDeleteFriend = props => {
    return (
      <div
        className={props.status ? "show del-modl-bg" : "hide del-modl-bg"}
      >
        <div className="del-modl-content">
          <div className={props.status ? "show del-modl-content-left" : "hide del-modl-content-left"}>
            <img
              className="del-modl-content-left-img"
              src={props.friend.image}
              alt="friend to be deleted"
            />
          </div>
          <div className={props.status ? "show del-modl-content-right" : "hide del-modl-content-right"}>
            <p>{"Are you sure you want to delete this friend?"}</p>
            <div>
              <Button color="info" onClick={props.toggleDeleteModalStatus}>Cancel</Button>{' '}
              <Button color="danger" className="btn-delete">Proceed</Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ModalDeleteFriend;
