import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Gamelist from "./Gamelist";
import Gamesdetails from "./Gamesdetails";
import Cartlist from "./Cartlist";

function App() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart,setCart]=useState([])
  

  useEffect(() => {
    fetch("https://www.freetogame.com/api/games")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .then((data) => {
        setGames(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);
  useEffect(()=>{
    fetch("https://cart-7iol.onrender.com/cart")
    .then(resp=>resp.json())
    .then(data=>setCart(data))
  },[])
  function onAdd(newgame){
    const updateCart=[...cart,newgame]
    setCart(updateCart)
  }
  function onRemove(id){
    const updateCart=cart.filter((game)=>game.id!== id)
    setCart(updateCart)
  }

  return (
    <div>
      <NavBar />
      {isLoading ? (
        <div>Loading...</div> // Show the loading message or a loading component
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/games" element={<Gamelist games={games} />} />
          <Route exact path="/games/:id" element={<Gamesdetails onAdd={onAdd}/>}/>
          <Route path="/cart" element={<Cartlist games={cart} onRemove={onRemove}/>}/>
        </Routes>
      )}
    </div>
  );
}

export default App;
