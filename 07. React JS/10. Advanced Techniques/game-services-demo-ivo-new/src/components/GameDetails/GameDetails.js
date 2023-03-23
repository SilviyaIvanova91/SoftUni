import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { AddComment } from "./AddComment/AddComment";

import * as commentService from "../../services/commentService";
import { gameServiceFactory } from "../../services/gameService";
import { gameReduser } from "../../reducers/gameReduser";

export const GameDetails = () => {
  const { gameId } = useParams();
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  // const [username, setUsername] = useState("");
  // const [comment, setComment] = useState("");
  //const [game, setGame] = useState({});
  const [game, dispatch] = useReducer(gameReduser, {});

  const gameService = useService(gameServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      gameService.getOne(gameId),
      commentService.getAll(gameId),
    ]).then(([gameData, comments]) => {
      const gameState = {
        ...gameData,
        comments,
      };

      dispatch({ type: "GAME_FETCH", payload: gameState });
      // dispatch({ type: "GAME_FETCH", game: gameState });

      //---second before dispatch
      //setGame(gameState);

      //-first
      // setGame({
      //   ...gameData,
      //   comments,
      // });
    });

    // gameService.getOne(gameId).then((result) => {
    //   setGame(result);
    // });
  }, [gameId]);

  const onCommentSubmit = async (values) => {
    // console.log(values);
    const response = await commentService.create(gameId, values.comment);
    console.log(response);

    dispatch({
      type: "COMMENT_ADD",
      payload: response,
      userEmail,
      // payload: { ...response, email: userEmail },
    });

    //--second before dispatch
    // setGame((state) => ({
    //   ...state,
    //   comments: [
    //     ...state.comments,
    //     {
    //       ...response,
    //       author: {
    //         email: userEmail,
    //       },
    //     },
    //   ],
    // }));

    //---first
    // setGame((state) => ({
    //   ...state,
    //   comments: { ...state.comments, [result._id]: result },
    // }));
    // setUsername("");
    // setComment("");
  };

  const isOwner = game._ownerId === userId;

  const onDeleteClick = async () => {
    await gameService.delete(game._id);
    navigate("/catalog");
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {game.comments &&
              game.comments.map((x) => (
                <li key={x._id} className="comment">
                  <p>
                    {x.author.email}: {x.comment}
                  </p>
                </li>
              ))}
          </ul>

          {!game.comments?.length && <p className="no-comment">No comments.</p>}
        </div>

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        {isOwner && (
          <div className="buttons">
            <Link to={`/catalog/${game._id}/edit`} className="button">
              Edit
            </Link>
            <button className="button" onClick={onDeleteClick}>
              Delete
            </button>
          </div>
        )}
      </div>

      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
    </section>
  );
};
