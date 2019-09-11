import React from "react";
import {Form} from "semantic-ui-react";

class CardForm extends React.Component {
  state = { front: "", back: ""};

  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCardFunction(this.state);
    this.setState({ front: "", back: ""});
  };

  


  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Front"
            placeholder="Front"
            name="front"
            value={this.state.front}
            onChange={this.handleChange}           
            />
          <Form.Input 
            fluid
            label="Back"
            placeholder="Back"
            name="back"
            value={this.state.back}
            onChange={this.handleChange}
          />
          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }




}

export default CardForm;


/*
  const {front, back} = this.state;
  <Form> <Form.Input>
  name= label= placeholder= value
  <Form.Button>Submit
  componentDidMount() {
   if (this.props.card) {
     const{front, back} = this.props.card;
     this.setState({front, back});
   }
 };



*/