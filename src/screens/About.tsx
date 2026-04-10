import React from "react";

const About: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>

      <p style={styles.text}>
        Welcome to our application! This is the About page where we explain
        what our app does and who we are.
      </p>

      <p style={styles.text}>
        We are building a modern React + TypeScript app with clean architecture,
        reusable components, and Git version control.
      </p>

      <button style={styles.button}>Learn More</button>
    </div>
  );
};

const styles: {
  container: React.CSSProperties;
  title: React.CSSProperties;
  text: React.CSSProperties;
  button: React.CSSProperties;
} = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    marginBottom: "10px",
    color: "#555",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default About;