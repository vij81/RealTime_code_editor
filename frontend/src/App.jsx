import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setMessage(JSON.stringify(data)))
      .catch(() => setMessage("Cannot reach backend"));
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>codesync</h1>
      <p>Backend status: {message}</p>
    </main>
  );
}
