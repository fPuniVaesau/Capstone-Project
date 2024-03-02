import React, { useState } from 'react';

export default function Form2() {
  let [value, setValue] = useState({ FirstName: '', LastName: '', Age: null });

  const handleFirstName = (e) => {
    setValue({ ...value, FirstName: e.target.value });
  };

  const handleLastName = (e) => {
    setValue({ ...value, LastName: e.target.value });
  };

  const handleAge = (e) => {
    setValue({ ...value, Age: e.target.value });
  };

  return (
    <>
      <h1>This is handling multiple input for a form.</h1>
      <form>
        <input
          type='text'
          onChange={(e) => {
            handleFirstName(e);
          }}
        />
        <input
          type='text'
          onChange={(e) => {
            handleLastName(e);
          }}
        />
        <input
          type='text'
          onChange={(e) => {
            handleAge(e);
          }}
        />
      </form>
      <h3>
        Output: <br />
        First Name: {value.FirstName} <br />
        Last Name: {value.LastName} <br />
        Age: {value.Age}
      </h3>
    </>
  );
}
