import React from "react";

function Game(game){
    const[name,image,type]=game
    return(
        <div>
            <img src={image} alt="game logo"/>
            <p>{name}</p>
            <p>Genre:{type}</p>
        </div>
    )
}

export default Game