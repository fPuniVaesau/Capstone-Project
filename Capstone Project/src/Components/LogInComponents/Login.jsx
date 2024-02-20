import { useState } from 'react';

export default function Login() {
  let [credentials, setCredentials] = useState({ UserName: '', PassWord: '' });

  let setUserName = (e) => {
    setCredentials({ ...credentials, UserName: e.target.value });
  };

  let setPassword = () => {
    setCredentials({ ...credentials, PassWord: e.target.value });
  };

  return (
    <div>
      <h3>Login</h3>
      <form>
        <label htmlFor=''>Username</label>
        <input
          type='text'
          onChange={(e) => {
            setUserName(e);
          }}
        />
        <br></br>
        <label htmlFor=''>Password</label>
        <input
          type='password'
          onChange={(e) => {
            setPassword(e);
          }}
        />
      </form>
      <button>Enter</button>
    </div>
  );
}
