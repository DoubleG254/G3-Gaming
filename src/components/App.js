import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Gamelist from "./Gamelist";
import Gamesdetails from "./Gamesdetails";

function App() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false); // Make sure to set isLoading to false in case of an error as well
      });
  }, []);
  

  return (
    <div>
      <NavBar />
      {isLoading ? (
        <div>Loading...</div> // Show the loading message or a loading component
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/games" element={<Gamelist games={games} />} />
          <Route path="/games/:id" element={<Gamesdetails/>}/>
        </Routes>
      )}
    </div>
  );
}

export default App;
