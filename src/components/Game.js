import React from "react";
import { Link } from "react-router-dom";

function Game({game}){
    const{title,thumbnail,genre,id}=game
    return(
        <div className="m-5 flex flex-col  justify-items-centre hover:w-1/3 bg-violet-400 ">
            <img src={thumbnail} alt="game logo" />
            <p className="font-bold text-xl justify-self-centre text-blue-300">{title}</p>
            <p className="text-blue-200">Genre:{genre}</p>
            <Link to={`/games/${id}`} className="flex  text-violet-600 hover:text-violet-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>View Details
</Link>

        </div>
    )
}

export default Game