import React from "react";
import Game from "./Game";

function Gamelist(games){

    return(
        <div>
             {games.map((game)=>{
                <Game index={game.id} game={game}/>
             })}
        </div>
    )
}