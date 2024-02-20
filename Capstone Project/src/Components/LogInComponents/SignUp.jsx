import { useState } from 'react';

export default function SignUp() {
  let [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    userName: '',
    password: '',
  });

//   Functions to handle each input field.

  let setFirstName = (e) => {
    setCredentials({...credentials, firstName: e.target.value})
  }

  return (
    <>
      <h3>Sign Up</h3>
      <form action=''>
        <label htmlFor=''>First Name</label>
        <input type='text' onChange={(e)=>setFirstName(e)}/>
        <br />
        <label htmlFor=''>Last Name</label>
        <input type='password' />
        <br />
        <label htmlFor=''>Age</label>
        <input type='number' />
        <br />
        <label htmlFor=''>UserName</label>
        <input type='text' />
        <br />
        <label htmlFor=''>Password</label>
        <input type='text' />
      </form>
      <button>Submit</button>
    </>
  );
}
