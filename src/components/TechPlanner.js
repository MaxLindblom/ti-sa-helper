import { React, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { techColors, techs } from '../util/constants';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';

function TechPlanner() {
  const defaultState = () => {
    const state = {};
    techs.map((tech) => {
      state[tech.name] = false;
    });
    const currentlySelected = JSON.parse(localStorage.getItem('tech-state'));
    if (currentlySelected !== null) {
      currentlySelected.map((tech) => (state[tech] = true));
    }
    return state;
  };
  const [checked, setChecked] = useState(defaultState());

  const flipChecked = (e, flipped = 'none') => {
    const techName = e.target.id;
    const newState = Object.assign({}, checked);
    newState[techName] = !checked[techName];
    if (flipped !== 'none') {
      newState[flipped] = !newState[flipped];
    }
    const selectedList = [];
    for (const key in newState) {
      if (newState[key]) {
        selectedList.push(key);
      }
    }
    localStorage.setItem('tech-state', JSON.stringify(selectedList));
    setChecked(newState);
    // If the tech was unselected, recursively check if other techs are no longer selectable
    if (newState[techName] === false) {
      selectedList.map((tech) => {
        if (!isSelectable(tech, newState)) {
          flipChecked({ target: { id: tech } }, techName);
        }
      });
    }
  };

  const isSelectable = (name, state = checked) => {
    const tech = techs.find((tech) => tech.name === name);
    if (tech.requires.length === 0) {
      return true;
    }
    const selectedList = tech.requires.map((tech) => state[tech]);
    if (tech.requiresAll) {
      return !selectedList.includes(false);
    }
    return selectedList.includes(true);
  };

  const redTechs = [];
  const blueTechs = [];
  const greenTechs = [];
  const yellowTechs = [];
  techs.map((tech) => {
    switch (tech.color) {
      case techColors.red:
        redTechs.push(tech);
        break;
      case techColors.blue:
        blueTechs.push(tech);
        break;
      case techColors.green:
        greenTechs.push(tech);
        break;
      case techColors.yellow:
        yellowTechs.push(tech);
        break;
    }
  });

  const techCards = (techs) => {
    return techs.map((tech) => {
      const isDisabled = !isSelectable(tech.name);
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      let separator = '';
      if (tech.requires.length > 0) {
        separator = tech.requiresAll ? ' AND ' : ' OR ';
      }
      const requirementString = 'Requires: ' + tech.requires.join(separator);
      return (
        <>
          <Card
            key={tech.name}
            className={`card-tech ${isDisabled ? 'not-' : ''}selectable`}
          >
            <Card.Title onClick={handleShow}>{tech.name}</Card.Title>
            <input
              id={tech.name}
              type="checkbox"
              disabled={isDisabled}
              checked={checked[tech.name] && !isDisabled}
              onChange={flipChecked}
            ></input>
          </Card>
          <Modal show={show} centered onHide={handleClose} key={tech.name}>
            <Modal.Title>&nbsp;{tech.name}</Modal.Title>
            <Modal.Body>
              {tech.description}
              {tech.requires.length > 0 && (
                <>
                  <br />
                  <br />
                  <i>{requirementString}</i>
                </>
              )}
            </Modal.Body>
          </Modal>
        </>
      );
    });
  };

  const selectedDescriptions = () => {
    const selected = Object.keys(checked).filter(
      (key) => checked[key] === true
    );
    return (
      <ul>
        {selected.map((techName) => {
          const description = techs.find(
            (tech) => tech.name === techName
          ).description;
          return <li key={techName}>{description}</li>;
        })}
      </ul>
    );
  };

  return (
    <div className="tech-container">
      <div className="blue-container">{techCards(blueTechs)}</div>
      <div className="green-container">{techCards(greenTechs)}</div>
      <div className="yellow-container">{techCards(yellowTechs)}</div>
      <div className="red-container">{techCards(redTechs)}</div>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>Tech Summary</Accordion.Header>
          <Accordion.Body>{selectedDescriptions()}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TechPlanner;
