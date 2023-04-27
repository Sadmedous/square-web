import React, { useState, useEffect } from 'react';
import ForgotPassword from "./components/ForgotPassword"
import axios from 'axios';
import EmailSend from "../src/components/EmailSend"
import SignIn from './components/auth/SignIn';
const App = () => {

  return (
    <div>
      {/* <EmailSend/> */}
      {/* <ForgotPassword/> */}
      <SignIn/>
    </div>
  );
};

export default App;
