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
    clickedImage: [],
    count: 0,
    message: "Let`s Start!"
  };

  clickedImage = event => {
    const currentImage = event.target.alt;
    const ImageAlreadyClicked = this.state.clickedImage.indexOf(currentImage)> -1;

    if(ImageAlreadyClicked) {
      this.setState({
        friends: this.state.friends.sort(function(a,b){
          return 0.5 -Math.random();
        }),
        clickedImage: [],
        count:0,
        message:"You Lose. Play Again?"
      });

      }else{
        this.setState({
          friends: this.state.friends.sort(function(a,b){
            return 0.5 - Math.random();
          }),
          clickedImage: this.state.clickedImage.concat(
            currentImage
          ),
          count: this.state.count + 1,
          message: "Good Job! Your memory is good!"
        },
        () => {
          if (this.state.count === 12){
            this.setState({
              friends:this.state.friends.sort(function(a,b){
                return 0.5 - Math.random();
              }),
              clickedImage:[],
              count: 0,
              message: "Yay!You Win!"
            });
          }
        })
      }
  }

 
  // Map over this.state.friends and render a FriendCard component for each friend object
  render(){    
  return (
      <div>
        <Header />
        <Navbar count={this.state.count} message={this.state.message}/>
        <Wrapper>
          {this.state.friends.map(friends => (
            <FriendCard
              id={friends.id}
              key={friends.id}
              image={friends.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </Wrapper>
      </div>
    );
  }}


export default App;
