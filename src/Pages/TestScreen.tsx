// src/TestScreen.tsx
import React from "react";

const TestScreen: React.FC = () => {
  const user = {
    name: "Wafadar Abbas",
    email: "wafadar@example.com",
    role: "Admin",
  };

  const tasks = [
    { id: 1, title: "Create feature branch", completed: true },
    { id: 2, title: "Add TestScreen", completed: true },
    { id: 3, title: "Push to GitHub", completed: false },
    { id: 4, title: "Merge to main", completed: false },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      <h2>Tasks for this feature:</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestScreen;