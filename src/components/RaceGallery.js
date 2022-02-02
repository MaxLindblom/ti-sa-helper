import { React, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import { races } from '../util/constants';

function RaceGallery() {
  return (
    <div className="portrait-container">
      {races.map((value) => {
        const portraitSource = `../../portraits/${value}.jpg`;
        const sheetSource = `../../race-sheets/${value}.jpg`;
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return (
          <div className="portrait-img" key={value}>
            <Image
              src={portraitSource}
              rounded
              alt={value}
              onClick={handleShow}
            />
            <Modal show={show} centered onHide={handleClose} key={value}>
              <img className="d-block w-100" src={sheetSource} alt={value} />
            </Modal>
            {value}
          </div>
        );
      })}
    </div>
  );
}

export default RaceGallery;
