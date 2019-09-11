import React from "react";
import { Table, Button } from "semantic-ui-react";


const Card = ({ id, front, back, remove }) => (
  <Table.Row >
    <Table.Cell>{front}</Table.Cell>
    <Table.Cell>{back}</Table.Cell>
    <Table.Cell>
      <Button color="red" onClick={() => remove(id)}>
        Delete
      </Button>
      <Button color="blue">
        Flip
      </Button>
    </Table.Cell>
  </Table.Row> 
);

export default Card;


/* <Card.Group>
    <Card>
      <Card.Content>
      
        <Card.Header textAlign="center">{front}</Card.Header>

      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Flip
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    
  </Card.Group> */