import React from 'react';

const Equation = (props) => {
  const { value1, value2, value3, proposedAnswer } = props.gameCurrent;

  return (
    <div className="equation">
      <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
    </div>
  );
}

export default Equation;
