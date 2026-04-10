import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Home Page 🚀</h1>

      <p style={styles.text}>
        Ye tumhara simple Home component hai jahan tum UI practice kar sakte ho.
      </p>

      <button style={styles.button} onClick={() => alert("Hello! 👋")}>
        Click Meeee
      </button>

      {/* 👉 New About Button */}
      <button
        style={{ ...styles.button, backgroundColor: "green" }}
        onClick={() => navigate("/about")}
      >
        Go to About Page
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  title: {
    color: "#2c3e50",
  },
  text: {
    fontSize: "16px",
    color: "#555",
  },
  button: {
    padding: "10px 20px",
    marginTop: "20px",
    marginRight: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;