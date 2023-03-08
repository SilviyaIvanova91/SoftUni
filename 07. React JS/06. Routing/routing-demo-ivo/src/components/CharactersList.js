import { useEffect, useState } from "react";
import { CharacterListItem } from "./CharacterListItem";

const url = "https://swapi.dev/api/people";

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map((x) => (
          <CharacterListItem key={x.url} {...x} />
        ))}
      </ul>
    </>
  );
};
