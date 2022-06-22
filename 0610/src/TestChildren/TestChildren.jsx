import React from 'react';

const TestChildren = ({a, b, c}) => {
  //const {a, b, c} = props;
  return (
    <div>
      <ul>
        <li>{a}</li>
        <li>{b}</li>
        <li>{c}</li>
      </ul>
    </div>
  );
};

export default TestChildren;