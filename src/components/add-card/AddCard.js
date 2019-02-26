import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addMovie} from '../../actions/action'
import {Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './AddCard.css'

export class addCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }


  handleInput =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
}

toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
}


  render() {
    return (
      <div className='add-container'>
        <Button color="danger" onClick={this.toggle}><i className="fas fa-plus"></i></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a new Movie</ModalHeader>
          <ModalBody>
            <Label className='label-form' for="image-src">Movie image source:</Label>
            <Input name="img" onChange={this.handleInput}className='input-form' plaintext placeholder='movie src' />

            <Label for="image-name">Movie name:</Label>
            <Input name="name" onChange={this.handleInput} className='input-form' plaintext placeholder='Movie name' />

            <Label for="image-description">Movie description:</Label>
            <Input name="description" onChange={this.handleInput} className='input-form' plaintext placeholder='Movie name' />

            <Label for="movie-rating">Movie rating:</Label>
            <Input name="rating" onChange={this.handleInput} className='input-form' plaintext placeholder='Movie rating' />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.addMovie(this.state)}>Add</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovie: (newMovie) => {dispatch(addMovie(newMovie))
      }
  }
}

const AddCardContainer = 
    connect(null, mapDispatchToProps)(addCard)

export default AddCardContainer