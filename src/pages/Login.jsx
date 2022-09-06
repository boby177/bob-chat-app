import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebase";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate('/')
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Bob Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>SIGN IN</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Do not have any account? Register <Link to="/register">here</Link></p>
      </div>
    </div>
  );
}

export default Login;
