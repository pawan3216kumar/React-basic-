// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn?  <h2>  Your Welcome </h2>: <h2>Login Please</h2>}</div>;
}

export default LoginMessage;
