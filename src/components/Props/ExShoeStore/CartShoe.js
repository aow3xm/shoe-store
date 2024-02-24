import React, { Component } from 'react';

export default class CartShoe extends Component {
  renderListTrShoeCart = () => {
    let { dataCartShoe, handleDeleteShoe, handleChangeQuantity} = this.props;
    return dataCartShoe.map((shoe, index) => {
      return (
        <tr key={index}>
          <td>{shoe.name}</td>
          <td>
            <img width={50} src={shoe.image} alt="" />
          </td>
          <td>{shoe.price}</td>
          <td>
          <button className='btn btn-danger mx-2' onClick={()=>(handleChangeQuantity(shoe.id, 'decrease'))}>-</button>
            {shoe.soLuong}
            <button className='btn btn-success mx-2' onClick={()=>handleChangeQuantity(shoe.id, 'increase')}>+</button>
            </td>
          <td>{shoe.price * shoe.soLuong}</td>
          <td>
            <button className="btn btn-danger" onClick={()=>{handleDeleteShoe(shoe.id)}}>Delete</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    // let { dataCartShoe } = this.props;
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>{this.renderListTrShoeCart()}</tbody>
        </table>
      </div>
    );
  }
}
