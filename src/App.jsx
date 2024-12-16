// src/App.jsx
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  // Listen for user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Welcome to MoviePicker!</h1>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleLogout} style={{ padding: "10px 20px", cursor: "pointer" }}>
            Logout
          </button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
