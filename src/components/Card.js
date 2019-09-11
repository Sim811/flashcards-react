import React from "react";
import { Table, Button } from "semantic-ui-react";


const Card = ({ id, front, back, remove }) => (
  <Table.Row >
    <Table.Cell textAlign="center">{front}</Table.Cell>
    
    <Table.Cell textAlign="center">
      <Button color="blue">
        Flip
      </Button>
      <Button color="yellow">
        Edit
      </Button>
      <Button color="red" onClick={() => remove(id)}>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row> 
);

export default Card;


/* 
  const{ showBack } = this.state;
  const{ back, front } = this.props
  state = { showBack: false, editing: false}
  return(
    <Card>
    {
      this.state.editing ?
      <FlashCardForm card={this.props} />
      :
      <>
        <Card.Content onClick={this.toggle.Card}
          <Card.Header>
            {showBack ? back : front }
          </Card.Header 
          <Card.Content extra>
            <Button color="yellow" onClick={this.toggleEdit}>Edit</Button>
        </Card.Content
      </>
    }
  )

  toggleCard = () => {
    this.setState({ showBack: !this.state.showBack})
  };

  toggleEdit = () => { 
    this.state
  }





    <Card.Group>
    <Card>
      <Card.Content>
      
        <Card.Header textAlign="center">{this.props.front}</Card.Header>

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