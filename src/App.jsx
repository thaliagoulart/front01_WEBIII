import { useEffect, useState } from "react";
import "./App.css";
import { Box } from "./App.style";
import axios from "axios";

export function App() {
  const [person, setPerson] = useState({
    name: {
      first: "???",
    },
  });

  useEffect(() => {handleGet}, []);

  async function handleGet() {
    const data = await axios.get("https://randomuser.me/api/");

    setPerson(data.data.results[0]);
  }
  const txt = "Hello World!";

  return (
    <Box>
      <button onClick={handleGet}>Request</button>
      <p>Nome: </p>
      <p>{person.name.first}</p>
    </Box>
  );
}
