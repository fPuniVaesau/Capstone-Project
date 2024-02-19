import React, { useState } from 'react';

export default function Form() {
  let [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <>
      <form>
        <input
          type='text'
          onChange={(e) => {
            handleChange(e);
          }}
          value={value}
        />
      </form>
    </>
  );
}
