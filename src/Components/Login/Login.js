import { useState } from "react";
import app from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const auth = getAuth(app);
  const handleLogin = async (e) => {
    e.preventDefault();
    try{
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;
        if(user.emailVerified){
            setMessage("login successfull");
        }
        else{
            setError("please verify your email");
        }
    }
    catch(err){
        setError(err.message);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
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
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


export default Login;
