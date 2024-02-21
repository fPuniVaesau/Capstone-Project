import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default function LoginSignUp() {
  let [userStatus, setUserStatus] = useState(true);

  if (userStatus === true) {
    return <Login />;
  } else {
    return <SignUp />;
  }
}
