export const JokeArticle = ({ iconUrl, text }) => {
  if (text && !text.startsWith("Chuck Norris")) {
    throw new Error("No Chuck Norris");
  }

  return (
    <article>
      <header>
        <img src={iconUrl} alt="Chuck Norris Joke" />
      </header>

      <main>
        <p className="joke">{text}</p>
      </main>
    </article>
  );
};
