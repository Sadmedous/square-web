import React, { useState, useEffect } from 'react';
import ForgotPassword from "./components/ForgotPassword"
import axios from 'axios';
import EmailSend from "../src/components/EmailSend"

const App = () => {

  return (
    <div>
      <EmailSend/>
      {/* <ForgotPassword/> */}
    </div>
  );
};

export default App;
