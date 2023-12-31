import React from "react";

function Cart({game,onRemove}){
    const{thumbnail,title,game_url,id}=game
    function handleRemove(){
        fetch(`https://cart-7iol.onrender.com/cart/${id}`,{
            method:"DELETE"
        })
        onRemove(id)
    }
    return(
        <div className="flex p-4 ">
            <img src={thumbnail} alt="game logo"/>
            <div className="p-4 items-centre mt-8">
                <h1 className="p-2 font-bold text-2xl">{title}</h1>
            <div className="flex">
            <a href={game_url} target="_blank" rel="noreferrer" className="flex border bg-green-400 p-2 ml-1 hover:bg-green-500 active:bg-green-700 rounded border-black">DOWNLOAD <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
</a>
                <button onClick={handleRemove} className="flex border border-black ml-2 p-1 bg-red-500 hover:bg-red-400 active:bg-red-700 rounded">REMOVE <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
            </div>
            </div>
        </div>
    )
}

export default Cart