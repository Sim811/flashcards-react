import React, {Component} from 'react';
import Cards from "./components/Cards";
import CardForm from "./components/CardForm";

import './App.css';
import {Container, Header, Button, Icon, Segment,} from "semantic-ui-react";

class App extends Component {
  state = {
    cards: [
      {id:1, front: "FRONT", back: "BACK"},
      {id:2, front: "Yin", back: "Yang"},
      {id:3, front: "FRONT", back: "BACK"},
    ], 
    showForm: true
  };


  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 10000);
  };

  addCard = (cardData) => {
    const card = {id: this.getId(), ...cardData}
    this.setState({ cards: [card, ...this.state.cards], });
  };

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
        return card;
    });
    this.setState({ cards, });
  };


  render() {
    const {cards, showForm} = this.state;
    return (
      <Container style={{ paddingTop: "25px"}}>
        <Header 
        as="h1" 
        textAlign="center">Flash Cards
        </Header>
        <Segment basic>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={showForm ? "angle double up" : "angle double down"} />
          </Button>
          {
            showForm ? 
              <CardForm addCardFunction={this.addCard} /> 
            :
              null
          }
        </Segment> 
        <Cards 
        removeCardFunction={this.removeCard}
        cards={cards} 
        />
      </Container>
    );
  }
}

export default App;
