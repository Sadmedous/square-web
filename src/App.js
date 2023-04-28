import React, { useState, useEffect } from 'react';
import ForgotPassword from "./components/ForgotPassword"
import axios from 'axios';
import EmailSend from "../src/components/EmailSend"
import SignIn from './components/auth/SignIn';
import NavBar from './components/navBars/NavBar';
import SideNavBar from './components/navBars/SideNavBar';
const App = () => {

  return (
    <div>
    
      <SignIn/>

    </div>
  );
};

export default App;
