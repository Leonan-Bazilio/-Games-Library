import { useState } from "react";

export default function App() {
  const [games, setGames] = useState(() => {
    const storeGames = localStorage.getItem("obc-game-lib");
    if (!storeGames) return [];

    return JSON.parse(storeGames);
  });
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  function addGame({ title, cover }) {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((currentValue) => {
      const newState = [...currentValue, game];
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  }

  function removeGame(id) {
    setGames((currentValue) => {
      const newState = currentValue.filter((game) => game.id !== id);
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <div className="app">
      <h1>Game library</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(ev) => {
              setTitle(ev.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="cover">Cover</label>
          <input
            type="text"
            name="cover"
            id="cover"
            value={cover}
            onChange={(ev) => {
              setCover(ev.target.value);
            }}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt={`${game.title} game cover`} />
            <div>
              <h2>{game.title}</h2>
              <button onClick={() => removeGame(game.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
