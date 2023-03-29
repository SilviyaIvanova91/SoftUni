import { useCallback, useEffect, useMemo, useState } from "react";
import LatestGame from "./LatestGame";

export const Home = () => {
  const [latestGame, setLatestgame] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3030/data/games`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setLatestgame(result.map((x) => ({ ...x, rating: 0 })));
      });
  }, []);

  const onLikeClick = useCallback((gameId) => {
    setLatestgame((state) =>
      state.map((x) => (x._id === gameId ? { ...x, rating: x.rating + 1 } : x))
    );
  }, []);

  const result = useMemo(() => {
    // Slow calculation
    return 42;
  }, []);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />

      <div id="home-page">
        <h1>Latest Games - {result}</h1>

        {/* <!-- Display div: with information about every game (if any) --> */}
        {latestGame.map((game) => (
          <LatestGame key={game._id} {...game} onLikeClick={onLikeClick} />
        ))}

        {/* <!-- Display paragraph: If there is no games  --> */}
        {latestGame.length === 0 && <p className="no-articles">No games yet</p>}
      </div>
    </section>
  );
};

{
  /* <div className="game">
<div className="image-wrap">
  <img src="./images/ZombieLang.png" />
</div>
<h3>Zombie Lang</h3>
<div className="rating">
  <span>☆</span>
  <span>☆</span>
  <span>☆</span>
  <span>☆</span>
  <span>☆</span>
</div>
<div className="data-buttons">
  <a href="#" className="btn details-btn">
    Details
  </a>
</div>
</div>
<div className="game">
<div className="image-wrap">
  <img src="./images/MineCraft.png" />
</div>
<h3>MineCraft</h3>
<div className="rating">
  <span>☆</span>
  <span>☆</span>
  <span>☆</span>
  <span>☆</span>
  <span>☆</span>
</div>
<div className="data-buttons">
  <a href="#" className="btn details-btn">
    Details
  </a>
</div>
</div> */
}
