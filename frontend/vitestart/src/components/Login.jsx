import React from "react";

function Login() {
  return (
    <form>
      <p><input type="email" placeholder="Email" /> Username </p>
      <p><input type="password" placeholder="Password" /></p>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;