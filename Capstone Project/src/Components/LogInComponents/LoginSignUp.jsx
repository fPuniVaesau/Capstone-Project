import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default function LoginSignUp() {
  let [userStatus, setUserStatus] = useState();

  if (userStatus === true) {
    return <Login />;
  } else {
    return <SignUp />;
  }
}
