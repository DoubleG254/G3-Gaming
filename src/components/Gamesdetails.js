import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function Gamesdetails(){
    const[game,setGame]=useState([])
    const{id}=useParams()

    useEffect(()=>{
        fetch(`https://games-bhqo.onrender.com/games/${id}`)
        .then(resp=>resp.json())
        .then(data=>setGame(data))
    },[id])
    const{title,thumbnail,short_description,genre,publisher,developer,release_date}=game
    return(
        <div className=" pb-80  bg-gradient-to-b from-violet-300 to-blue-500">
          <div className="flex p-8 pt-20">
          <div>
          <img src={thumbnail} alt="game logo" />
            <p className="font-bold text-xl justify-self-centre text-blue-900">{title}</p>
            <p className="text-blue-600">Genre:{genre}</p>
          </div>
          <div className="pl-4">
            <p className="pb-1">{short_description}</p>
            <p> Publisher :{publisher}</p>
            <p>Developer :{developer}</p>
            <p className="pb-2">Release date :{release_date}</p>
            <button className="border border-black bg-green-400 flex ">Add to Cart<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pl-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

            </button>
          </div>
          </div>
            
        </div>
    )
}

export default Gamesdetails