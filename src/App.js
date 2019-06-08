import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    count: 0
  };


  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render(){    
  return (
      <div>
        <Navbar count={this.state.count}/>
        <Header />
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
              handleIncrement={this.handleIncrement}
            />
          ))}
        </Wrapper>
      </div>
    );
  }}


export default App;
