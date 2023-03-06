import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("Pesho");

  useEffect(() => {
    setTimeout(() => {
      setUsername("Gosho");
    }, 3000);
  }, []);

  const onUsernameChange = (e) => {
    console.log("change");
  };

  // const onSubmitClick = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.parentElement.previousSibling.children[1].value);
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    const formDate = new FormData(e.target);
    // const data = Object.fromEntries(formDate);
    const username = formDate.get("username");

    console.log(username);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue={username}
              onChange={onUsernameChange}
              //   onBlur={onUsernameChange} // when loose fockus
            />
          </div>

          <div>
            <input type="submit" value="Send" onClick={onSubmitClick} />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
