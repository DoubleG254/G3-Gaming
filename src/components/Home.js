import React from "react"
import intro from "./images/intro.gif"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-b from-violet-300 to-blue-500">
      <br></br>
        <img src={intro} alt=""className="w-11/12 mx-14 "/>
        <h1 className="text-5xl mt-5  flex items-centre justify-center">Game Genre</h1>
      <div className="flex justify-between p-4 w-4/5 ml-20 mt-5">
      <Link to={"/games/sports"} className="flex text-blue-200 text-2xl hover:text-4xl" >
        Sports
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
      <Link to={"/games/shooter"} className="flex text-blue-200 text-2xl hover:text-4xl">
        Shooter
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-7 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
      <Link to={"/games/fighting"} className="flex text-blue-200 text-2xl hover:text-4xl">
        Fighting
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-7 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
      <Link to={"/games/mmorpg"} className="flex text-blue-200 text-2xl hover:text-4xl">
        MMORPG
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-7 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
      <Link to={`/games/strategy`} className="flex text-blue-200 text-2xl hover:text-4xl">
        Strategy
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-7 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
      <Link to={`/games/cardgame`}className="flex text-blue-200 text-2xl hover:text-4xl">
        Card Game
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-7 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
      <Link to={`/games/moba`} className="flex text-blue-200 text-2xl hover:text-4xl">
        MOBA
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-7 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
      </div>
     
     <footer className="flex item-centre justify centre mt-5">More game genres will be added as we continue to update our systems otherwise enjoy the genres provided.</footer>
     
    </div>
  );
}

export default Home