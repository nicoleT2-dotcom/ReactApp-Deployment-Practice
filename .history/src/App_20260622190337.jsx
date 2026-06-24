import { useEffect } from "react";
const BASE_URL = "http://localhost:3001";
export default function App() {
  useEffect(() => {
    fetch(`${BASE_URL}/ping`)
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);
  return <h1>Checking connection...</h1>;
}
