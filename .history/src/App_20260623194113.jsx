import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:3001";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErorr] = useState;

  const fetchTask = async () => {
    try {
      const res = await fetch; ///task
      if (res.ok) throw new Error("Failed to fetch tasks ");
      const data = await res.json();
    } catch {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetch(`${BASE_URL}/tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data)(setLoading(false)));
  }, []);

  if (loading) {
    return <p>Page is loading</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}
