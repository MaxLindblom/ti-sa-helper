import { React, useState } from 'react';
import { unitTypes } from '../constants';
import Counter from './Counter';
import Button from 'react-bootstrap/Button';

function CombatCalculator() {
  const defaultState = () => {
    const unitState = {};
    const rollState = {};
    unitTypes.map((unit) => {
      unitState[unit] = 0;
      rollState[unit] = [];
    });
    return [unitState, rollState];
  };
  const [counters, setCounters] = useState(defaultState()[0]);
  const [rolls, setRolls] = useState(defaultState()[1]);

  const handleChange = (unit, count) => {
    if (count < 0) {
      count = 0;
    }
    const newState = Object.assign({}, counters);
    newState[unit] = count;
    setCounters(newState);
  };

  const clear = () => {
    setCounters(defaultState()[0]);
    setRolls(defaultState()[1]);
  };

  const diceRolls = (n) => {
    const rolls = [];
    for (let i = 0; i < n; i++) {
      rolls.push(Math.floor(Math.random() * 10) + 1);
    }
    return rolls;
  };

  const roll = () => {
    const newState = Object.assign({}, rolls);
    for (const [key, value] of Object.entries(counters)) {
      newState[key] = [];
      if (!value) {
        continue;
      }
      newState[key] = diceRolls(value);
    }
    setRolls(newState);
  };

  return (
    <div className="calculator-container">
      <div className="counter-container">
        <div className="column">
          {unitTypes.map((value) => {
            const displayValue = value + 's';
            const counterProp = counters[value];
            return (
              <Counter
                handleChange={handleChange}
                unit={value}
                count={counterProp}
                key={displayValue}
              />
            );
          })}
        </div>
        <div className="column">
          {unitTypes.map((value) => {
            const keyValue = value + '-span';
            const displayValue = rolls[value].length
              ? `${value}s roll [${rolls[value]
                  .sort((a, b) => {
                    return a - b;
                  })
                  .join(', ')}]`
              : '';
            return (
              <div className="span-container" key={keyValue}>
                <span>{displayValue}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="control-container">
        <Button onClick={clear}>Clear</Button>
        <Button onClick={roll}>Roll</Button>
      </div>
    </div>
  );
}

export default CombatCalculator;
