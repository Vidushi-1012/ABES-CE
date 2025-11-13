import React from "react";

function Book() {
  return (
    <div>
      <h1>Welcome to Book Portal</h1>
      <p>Please choose an option:</p>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/Register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Book;
