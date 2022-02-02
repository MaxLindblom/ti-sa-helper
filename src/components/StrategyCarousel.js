import { React, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { cardImages } from '../util/constants';

function StrategyCarousel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="carousel-container">
      <Button variant="primary" size="lg" onClick={handleShow}></Button>
      <Modal show={show} centered onHide={handleClose}>
        <Carousel fade interval={null}>
          {cardImages.map((value, index) => {
            return (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={value} alt={index} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Modal>
    </div>
  );
}

export default StrategyCarousel;
