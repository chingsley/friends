import React,{ Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'reactstrap';
import NavBar from './components/NavBar';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import Home from './components/Home';
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
      this.setState({friends: res.data})
    })
    .catch(err => console.log(err));
 }

 render() {
   console.log('this.state.friends = ', this.state.friends)
   return (
     <div className="App">
       <NavBar />
       <Route exact path="/" component={Home} />
       <Route exact path="/friends" render={props => (
         <FriendsList {...props} friends={this.state.friends} />
       )} />
       <Route path="/friends/:friendId" render={props => <Friend {...props} friends={this.state.friends} /> }/>
     </div>
   );
 }
}

export default App;
