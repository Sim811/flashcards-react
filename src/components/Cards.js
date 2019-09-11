import React from "react";
import Card from "./Card";
import { Table, } from "semantic-ui-react";


const Cards = ({ cards, remove }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Front</Table.HeaderCell>
        <Table.HeaderCell>Back</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
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