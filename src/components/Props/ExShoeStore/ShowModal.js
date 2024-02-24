import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ShowModal = ({ show, handleClose, shoe, handleAddShoe }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{shoe.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className='w-100 h-100' style={{}} src={shoe.image} alt={shoe.name} />
        <p>{shoe.price} $</p>
        <p>{shoe.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleAddShoe(shoe)}>
          Add to cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowModal;