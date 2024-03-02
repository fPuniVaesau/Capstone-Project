import React, { useState } from 'react';

export default function Button() {
  let [number, setNumber] = useState(0);

  return (
    <div>
      <h1>Choose a color!</h1>
      <button onClick={() => setNumber(number)}>Set Number</button>
      <p>Your favoiite # is: {number}</p>
    </div>
  );
}
