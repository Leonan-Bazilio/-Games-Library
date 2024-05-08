import { useState } from "react";

export default function useGameCollection() {
  const [games, setGames] = useState(() => {
    const storeGames = localStorage.getItem("obc-game-lib");
    if (!storeGames) return [];

    return JSON.parse(storeGames);
  });

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
  return { games, addGame, removeGame }
}