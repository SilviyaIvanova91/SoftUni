import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Character } from "./components/Character";
import { CharacterList } from "./components/CharactersList";
import { Home } from "./components/Home";
import { MainNavigaetion } from "./components/MainNavigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavigaetion />

        <Routes>
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/characters/:characterId/*" element={<Character />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
