import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default function LoginSignUp({prop}) {
  let [userStatus, setUserStatus] = useState(False)
  
  userStatus === true ? <Login /> : <SignUp />
}
