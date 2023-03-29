import { useNavigate } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import { gameServiceFactory } from "../services/gameService";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const gameService = gameServiceFactory(); //auth.accessToken

  useEffect(() => {
    gameService.getAll().then((result) => {
      //console.log(result);
      setGames(result);
    });
  }, []);

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data);
    // const newGame = await gameService.create(data, token);

    setGames((state) => [...state, newGame]);

    navigate("/catalog");
  };

  const onGameEditSubmit = async (values) => {
    const result = await gameService.edit(values._id, values);

    setGames((state) => state.map((x) => (x._id === values._id ? result : x)));
    navigate(`/catalog/${values._id}`);
  };

  const deleteGame = (gameId) => {
    setGames((state) => state.filter((game) => game._id !== gameId));
  };

  const getGame = (gameId) => {
    return games.find((game) => game._id === gameId);
  };

  const contextValues = {
    games,
    onCreateGameSubmit,
    onGameEditSubmit,
    deleteGame,
    getGame,
  };

  return (
    <GameContext.Provider value={contextValues}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);

  return context;
};
