// src/Login.jsx
import { useState } from "react";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  // Handle Login or SignUp
  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "10px", width: "300px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "10px", width: "300px" }}
      />
      <button onClick={handleAuth} style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}>
        {isSignUp ? "Sign Up" : "Login"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p onClick={() => setIsSignUp(!isSignUp)} style={{ color: "blue", cursor: "pointer" }}>
        {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
}

export default Login;
