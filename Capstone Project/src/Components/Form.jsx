import React, { useState } from 'react';

export default function Form() {
  let [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <>
      <h1>This is handle a single input form</h1>
      <form>
        <input
          type='text'
          onChange={(e) => {
            handleChange(e);
          }}
          value={value}
        />
      </form>
      <h3>Output: {value}</h3>
    </>
  );
}
