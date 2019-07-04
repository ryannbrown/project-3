import React from "react";
import './style.css';
import StarRatingComponent from 'react-star-rating-component'; 
import Modal from 'react-bootstrap/Modal'
// import DatePicker from "react-datepicker";
import {Button} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css"
import DatePickerComponent from '../DatePicker'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
//Info can be found at https://www.npmjs.com/package/react-star-rating-component

class Foodform extends React.Component {
    constructor(props, context, date) {
      super(props);
      this.state = {
        name: '',
        img: '',
        description: '',
        location:'',
        rating: 0,
        show: false,
        startDate: ''
      };
      this.input = React.createRef();
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }
  
    handleChange = event => {
    const {name, value } = event.target;

    
    this.setState ({
      [name]:value,
    });

  };

  
    handleSubmit = event => {
      event.preventDefault();
      alert(`name ${this.state.name} <br> Image: ${this.state.img} description: ${this.state.description} I give this ${this.state.rating} stars. location: ${this.state.location} Date: ${this.state.startDate}`)
      this.handleClose();

     this.setState({
        name: '',
        image: '',
        description: '',
        // rating:'',
        location:'',
        rating:1,
        startDate: ''
      });
    };

    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
    }
  
    render() {
      // const { rating } = this.state;
      return (
        
        <div class="dishForm">
         <Button className="dish-btn" variant="outline-danger" onClick={this.handleShow}>
           Post Dish!
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Submit a Dish!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name of dish:
              <input name="name" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
            Upload Image:
            <input name="img" type="file" ref={this.fileInput} />
          </label>
          <label>
            Describe the dish:
            <textarea name="description" value={this.state.value} onChange={this.handleChange} />
          </label>
          <StarRatingComponent
          starCount={10}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
          />
          <label>
            Location:
            <input type="text" name="location" value={this.state.value} onChange={this.handleChange} />
          </label>
          <DatePickerComponent
             selected={this.state.startDate}
             onChange={this.handleChange}/>
          </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button type="submit" value="Submit" variant="primary"  onClick={this.handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
         
        </div>
      );
    }
  }

  export default Foodform;