import React, { Component } from 'react';

import ShowModal from './ShowModal';

export default class ShoeItem extends Component {
  state = {
    showModal: false
  };
  handleShow = () => {
    this.setState({ showModal: true });
  };
  
  handleClose = () => {
    this.setState({ showModal: false });
  };
  render() {
    let { shoe, handleAddShoe } = this.props;
    return (
      <div
        className="card m-3 p-3"
        style={{
          height: '500px',
        }}
      >
        <img
          className="card-img-top p-3"
          src={shoe.image}
          height={300}
          alt="Title"
          style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 15px', objectFit: 'contain'}}
          onClick={() => this.handleShow()}
        />
        <div className="card-body">
          <h4 className="card-title">{shoe.name} </h4>
          <p>{shoe.price} $</p>
          <button
            
            className="btn btn-success"
            onClick={() => handleAddShoe(shoe)}
          >
            Add To cart <i className="fa-solid fa-cart-plus" />
          </button>
        </div>

        <ShowModal show={this.state.showModal} handleClose={this.handleClose} shoe={shoe} handleAddShoe={handleAddShoe} />
      </div>
    );
  }
}