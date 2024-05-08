import Game from "./components/Game.jsx";
import NewGameForm from "./components/NewGameForm.jsx";
import useGameCollection from "./hooks/useGameCollection.js";

export default function App() {
  const { games, addGame, removeGame } = useGameCollection();
  return (
    <div className="app">
      <h1>Game library</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />
          ))
        ) : (
          <h2 style={{ marginTop: "2rem" }}>Add your games here</h2>
        )}
      </div>
    </div>
  );
}
