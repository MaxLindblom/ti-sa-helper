import { React, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StrategyCarousel() {
  const cardImages = [
    '../../strategy-cards/xLeadership.jpg',
    '../../strategy-cards/xDiplomacy.jpg',
    '../../strategy-cards/xAssemblyTC.jpg',
    '../../strategy-cards/xProduction.jpg',
    '../../strategy-cards/xTrade.jpg',
    '../../strategy-cards/xWarfare.jpg',
    '../../strategy-cards/xTechnology.jpg',
    '../../strategy-cards/xBureaucracy.jpg',
    '../../strategy-cards/xProspect.jpg',
  ];
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
        <Modal.Body></Modal.Body>
      </Modal>
    </div>
  );
}

export default StrategyCarousel;
