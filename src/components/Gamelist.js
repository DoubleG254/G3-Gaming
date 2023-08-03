import React, { useState } from "react";
import Game from "./Game";

function Gamelist({ games }) {
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearch("");
  }

  const listGames = games.filter((game) => {
    if (search === "") {
      return true;
    } else {
      return game.title.toLowerCase().includes(search.toLowerCase());
    }
  });

  return (
    <div className="bg-gradient-to-b from-violet-300 to-blue-500">
      <form onSubmit={handleSubmit} className="flex justify-end p-4">
        <input
          type="search"
          placeholder="Game"
          value={search}
          className="border border-black rounded text-red-400"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="submit"
          value="Clear"
          className="border border-black rounded bg-blue-400 ml-2 p-2"
        />
      </form>
      <div className="flex flex-wrap justify-center ml-10">
        {listGames.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Gamelist;
