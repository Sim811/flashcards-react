import React from "react";
import Card from "./Card";
import { Table, } from "semantic-ui-react";


const Cards = ({ cards, remove }) => (
  <Table color="blue" columns={2} celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign="center">Front</Table.HeaderCell>
      
        <Table.HeaderCell textAlign="center">Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      
      {cards.map( card => ( 
      <Card key={card.id} {...card} remove={remove} />
      ))       
      }
    </Table.Body>
  </Table>
);

export default Cards;


/* <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign="center">Card</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {cards.map( card => ( <Card key={card.id} {...card}/>
      ))    
      }
    </Table.Body>
  </Table> */

  // <Card.Group itemsPerRow=3> props.flashCards.map( card => ( <FlashCard  {...card} /> 
    
  
  