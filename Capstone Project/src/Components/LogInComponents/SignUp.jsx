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
    setCredentials({ ...credentials, firstName: e.target.value });
  };

  let setLastName = (e) => {
    setCredentials({ ...credentials, lastName: e.target.value });
  }

  let setAge = (e) => {
    setCredentials({...credentials, age:e.target.value});
  }

  let setUserName = (e) => {
    setCredentials({...credentials, userName:e.target.value})
  };

  let setPassword = (e) => {
    setCredentials({...credentials, password:e.target.value})
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <form action=''>
        <label htmlFor=''>First Name</label>
        <input type='text' onChange={(e) => setFirstName(e)} />
        <br />
        <label htmlFor=''>Last Name</label>
        <input type='text' onChange={(e) => setLastName(e)}/>
        <br />
        <label htmlFor=''>Age</label>
        <input type='number' onChange={(e)=>setAge(e)}/>
        <br />
        <label htmlFor=''>UserName</label>
        <input type='text' onChange={(e)=> setUserName(e)} />
        <br />
        <label htmlFor=''>Password</label>
        <input type='text' onChange={(e)=> setPassword(e)}/>
      </form>
      <button>Submit</button>
    </div>
  );
}
