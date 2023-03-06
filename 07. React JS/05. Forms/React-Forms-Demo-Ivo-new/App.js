import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef();
  const [age, setAge] = useState();
  const [hobbies, setHobbies] = useState({});

  const [formValues, setFormValues] = useState({
    username: "Pesho",
    creditCard: "",
    occupation: "engineering",
    gender: "male",
    bio: "",
    age: "",
  });

  useEffect(() => {
    ref.current.value = formValues.username;
  }, [formValues.username]);

  const onChangehandler = (e) => {
    // console.log(ref.current.value);
    // if (e.target.name === "username") {
    //   ref.current.value = e.target.value;
    // }

    // let value = e.target.value;
    // if ((e.target.name = "age")) {
    //   value = Number(e.target.value);
    // }

    // setFormValues((state) => ({ ...state, [e.target.name]: value }));
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(username);
    console.log(age);
    console.log(creditCard);
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
              value={formValues.username}
              onChange={onChangehandler}
            />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={formValues.age} //??, вместо || за да можем да показваме 0, тъй като е тип undefined
              onChange={onChangehandler}
            />
          </div>

          {Number(formValues.age) >= 18 && (
            <div>
              <label htmlFor="credit-card">Credit Card</label>
              <input
                type="text"
                name="creditCard"
                id="credit-card"
                value={formValues.creditCard}
                onChange={onChangehandler}
              />
            </div>
          )}

          <div>
            <label htmlFor="occupation">Occupation</label>
            <select
              name="occupation"
              id="occupation"
              value={formValues.occupation}
              onChange={onChangehandler}
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
              onChange={onChangehandler}
              checked={formValues.gender === "male"}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={onChangehandler}
              checked={formValues.gender === "female"}
            />
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="10"
              value={formValues.bio}
              onChange={onChangehandler}
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
            <label htmlFor="uncontrolled">Uncontrolled</label>
            <input
              type="text"
              name="uncontrolled"
              id="uncontrolled"
              ref={ref}
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
