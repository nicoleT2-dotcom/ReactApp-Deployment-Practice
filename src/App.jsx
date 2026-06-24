import { useState, useEffect } from "react";
const BASE_URL = "https://my-server-wfkt.onrender.com";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await fetch(`${BASE_URL}/tasks`);
      if (!res.ok) throw new Error("Failed to fetch tasks");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getTask = async () => {
    const res = await fetch(`${BASE_URL}/tasks`);
  };

  const addTask = async () => {
    const res = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Test my code" }),
    });

    const newTask = await res.json();
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTask = async () => {
    const id = 4;
    const res = await fetch(`${BASE_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Updated title" }),
    });

    const data = await res.json();
    setTasks((prev) => prev.map((task) => (task.id === data.id ? data : task)));
  };

  const deleteTask = async () => {
    const id = 2;
    const res = await fetch(`${BASE_URL}/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error}</p>;
  }

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <button onClick={updateTask}>Update Task</button>
      <button onClick={deleteTask}>Delete Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
