import React,{ Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar2';
import FriendsList from './components/FriendsList';
import FormAddNew from './components/FormAddNew';
import Home from './components/Home2';
// import Modal from './components/modal/Modal';
import './App.css';

class App extends Component {
 constructor() {
   super();
   this.state = {
     friends: [],
   };
 }

 componentDidMount() {
   axios.get("http://localhost:5000/friends")
    .then(res => {
      localStorage.setItem('friends', JSON.stringify(res.data))
      this.setState({friends: res.data})
    })
    .catch(err => console.log(err));
 }


 addNewFriend = form => {
   axios
     .post("http://localhost:5000/friends", form)
     .then(res => {
       localStorage.setItem('friends', JSON.stringify(res.data))
       this.setState({ friends: res.data });
       this.props.history.push('/friends');
     })
     .catch(err => console.log(err));
 };

 updateFriend = friend => {
   axios
    .put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then(res => {
      localStorage.setItem('friends', JSON.stringify(res.data))
      this.setState({ friends: res.data })
      this.props.history.push('/friends');
    })
    .catch(err => console.log(err));
 };

 render() {
   return (
     <div className="App">
       <NavBar />
       <Route exact path="/" component={Home} />
       <Route exact path="/friends" render={props => (
         <FriendsList
          {...props}
          friends={this.state.friends}
          setActiveFriend={this.setActiveFriend}
         />
       )}/>
       <Route path="/friends/new" render={props => (
         <FormAddNew
           {...props}
           addNewFriend={this.addNewFriend}
         />
       )}/>
       <Route path="/friends/:friendId/edit" render={props => (
         <FormAddNew
           {...props}
           updateFriend={this.updateFriend}
         />
       )}/>
       {/* <Route path="/friends/:friendId/delete" render={props => (
         <Modal
           {...props}
           onClick={this.modalToggle} status={this.state.modal}
         />
       )}/> */}
     </div>
   );
 }
}

const AppWithRouter = withRouter(App);


export default AppWithRouter;
