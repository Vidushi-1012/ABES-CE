import React from "react";

function Register() {
  return (
    <form>
      <p><input type="text" placeholder="Full Name" /></p>
      <p><input type="email" placeholder="Email" /></p>
      <p><input type="password" placeholder="Password" /></p>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;