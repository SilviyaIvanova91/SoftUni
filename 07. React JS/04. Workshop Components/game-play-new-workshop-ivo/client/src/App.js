import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import { Catalog } from "./components/Catalog/Catalog";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Footer } from "./components/Footer/Footer";
import { GameDetails } from "./components/GameDetails/GameDetails";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import * as gameServices from "./services/gameService";

function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    gameServices.getAll().then((result) => {
      setGames(result);
    });
  }, []);

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameServices.create(data);
    // console.log(newGame);
    setGames((state) => [...state, newGame]);

    navigate("/catalog");
  };

  return (
    <>
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create-game"
            element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />}
          />
          <Route path="/catalog" element={<Catalog games={games} />} />
          <Route path="/catalog/:gameId" element={<GameDetails />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
