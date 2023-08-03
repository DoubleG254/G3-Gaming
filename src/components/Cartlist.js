import React from "react";
import Cart from "./Cart";

function Cartlist({games,onRemove}){
   
    return(
        <div className="bg-gradient-to-b from-violet-300 to-blue-500">
            <div>
                {games.map((game)=>(
                    <Cart key={game.id} game={game} onRemove={onRemove}/>
                ))}
            </div>
        </div>
    )
}

export default Cartlist