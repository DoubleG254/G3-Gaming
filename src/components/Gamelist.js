import React from "react";
import Game from "./Game";

function Gamelist({ games }) {
  return (
    <div className="bg-gradient-to-b from-violet-300 to-blue-500">
         <div className="flex justify-end p-2">
         <input type="search" placeholder="Search"/>
         </div>
      <div className="flex flex-wrap  justify-centre ml-10 ">
        {games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Gamelist;
