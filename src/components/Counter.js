import { React } from 'react';
import { Button } from 'react-bootstrap';

function Counter(props) {
  const handleIncrement = () => props.handleChange(props.unit, props.count + 1);
  const handleDecrement = () => props.handleChange(props.unit, props.count - 1);

  return (
    <div className="combat-counter">
      <div className="unit-name">{props.unit}</div>
      <div className="button-container">
        <Button onClick={handleDecrement} disabled={!props.count}>
          -
        </Button>
        <span className="counter-output" key={props.unit}>
          {props.count}
        </span>
        <Button onClick={handleIncrement}>+</Button>
      </div>
    </div>
  );
}

export default Counter;
