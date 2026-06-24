import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:3001";
export default function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}
