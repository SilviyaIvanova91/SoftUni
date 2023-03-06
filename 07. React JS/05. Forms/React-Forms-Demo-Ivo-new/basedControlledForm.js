import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("Pesho");
  const [creditCard, setcreditCard] = useState("");
  const [occupation, setOccupation] = useState("engineering");
  const [gender, setGender] = useState("male");
  const [bio, setBio] = useState("");

  const [age, setAge] = useState();
  const [hobbies, setHobbies] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setUsername("Gosho");
    }, 3000);
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(username);
    console.log(age);
    console.log(creditCard);
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onAgeChange = (e) => {
    setAge(Number(e.target.value));
  };

  const onCreditChange = (e) => {
    setcreditCard(Number(e.target.value));
  };

  const onOccupationSelect = (e) => {
    console.log(e.target.value);
    setOccupation(e.target.value);
  };

  const onGenderChange = (e) => {
    setGender(e.target.value);
  };

  const onBioChange = (e) => {
    setBio(e.target.value);
  };

  const onHobiesChange = (e) => {
    setHobbies((state) => ({
      ...state,
      [e.target.value]: e.target.checked,
    }));
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
              value={username}
              onChange={onUsernameChange}
            />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age ?? ""} //??, вместо || за да можем да показваме 0, тъй като е тип undefined
              onChange={onAgeChange}
            />
          </div>

          {age >= 18 && (
            <div>
              <label htmlFor="credit-card">Credit Card</label>
              <input
                type="text"
                name="creditCard"
                id="credit-card"
                value={creditCard}
                onChange={onCreditChange}
              />
            </div>
          )}

          <div>
            <label htmlFor="occupation">Occupation</label>
            <select
              name="occupation"
              id="occupation"
              value={engineering}
              onChange={onOccupationSelect}
            >
              <option value="it">IT</option>
              <option value="engineering">Engineering</option>
              <option value="Medicine">Medicine</option>
            </select>
          </div>

          <div>
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={onGenderChange}
              checked={gender === "male"}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={onGenderChange}
              checked={gender === "female"}
            />
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="10"
              value={bio}
              onChange={onBioChange}
            ></textarea>
          </div>

          <div>
            <label htmlFor="hiking">Hiking</label>
            <input
              type="checkbox"
              name="hobbies"
              value="hiking"
              id="hiking"
              onChange={onHobiesChange}
              checked={hobbies["hiking"] || false}
            />
            <label htmlFor="reading">Reading</label>
            <input
              type="checkbox"
              name="hobbies"
              value="reading"
              id="reading"
              onChange={onHobiesChange}
              checked={hobbies["reading"] || false}
            />
            <label htmlFor="sports">Sports</label>
            <input
              type="checkbox"
              name="hobbies"
              value="sports"
              id="sports"
              onChange={onHobiesChange}
              checked={hobbies["sports"] || false}
            />
            <label htmlFor="gaming">Gaming</label>
            <input
              type="checkbox"
              name="hobbies"
              value="gaming"
              id="gaming"
              onChange={onHobiesChange}
              checked={hobbies["gaming"] || false}
            />
            <label htmlFor="coding">Coding</label>
            <input
              type="checkbox"
              name="hobbies"
              value="coding"
              id="coding"
              onChange={onHobiesChange}
              checked={hobbies["coding"] || false}
            />
          </div>

          <div>
            <input type="button" value="Send" onClick={onSubmitHandler} />
            <button type="button" onC>
              Send
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
