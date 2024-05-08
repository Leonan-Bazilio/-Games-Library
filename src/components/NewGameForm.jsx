import { useState } from "react";
import TextInput from "./TextInput";

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput value={title} setValue={setTitle} label={"Title"} />
      <TextInput value={cover} setValue={setCover} label={"Cover"} />
      <button type="submit">Add</button>
    </form>
  );
}
