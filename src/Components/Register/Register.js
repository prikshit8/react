import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernme, setUsername] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const auth = getAuth(app);
  const handleRegister = async (e) => {
    e.preventDefault();
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;
        await sendEmailVerification(user);
        setMessage('registeration successful!');
    }
    catch(err){
        setError(err.message);
    }
  };
  return (
    <div>
      <div>
        <h2>Register</h2>
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={usernme}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
