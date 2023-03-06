import "./App.css";
import { Fragment, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Serach } from "./components/Serach";
import { UserList } from "./components/UserList";
import * as UserServices from "./services/userServices";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormvalues] = useState({
    firstName: "",
    lastName: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
  });

  // useEffect(() => {
  //   async function getUsers() {
  //     const users = await UserServices.getAll();
  //   }
  //   getUsers();
  // }, []);

  useEffect(() => {
    UserServices.getAll()
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onUserCreateSubmit = async (e) => {
    // 1. stop automatic from submit
    e.preventDefault();

    // Take from data from DOM tree
    const formDate = new FormData(e.currentTarget);
    const data = Object.fromEntries(formDate);

    // Send ajax request to server
    const createdUser = await UserServices.create(data);

    //If successfill add new user to the state
    setUsers((state) => [...state, createdUser]);
  };

  const onUserDelete = async (userId) => {
    //Delete from server
    await UserServices.remove(userId);

    //Delete from state
    setUsers((state) => state.filter((x) => x._id !== userId));
  };

  const onUserUpdateSubmit = async (e, userId) => {
    e.preventDefault();

    // Take from data from DOM tree
    const formDate = new FormData(e.currentTarget);
    const data = Object.fromEntries(formDate);

    // Send ajax request to server
    const updatedUser = await UserServices.update(userId, data);

    //If successfill add new user to the state
    setUsers((state) => state.map((x) => (x._id === userId ? updatedUser : x)));
  };

  const formChangeHandler = (e) => {
    setFormvalues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const validateForm = (e) => {
    const value = e.target.value;
    let errors = {};

    if (
      e.target.name === "firstName" &&
      (value.length < 3 || value.length > 20)
    ) {
      errors.firstName = "First name should be between 3 and 20 characters";
    }

    if (
      e.target.name === "lastName" &&
      (value.length < 3 || value.length > 20)
    ) {
      errors.lastName = "Last name should be between 3 and 20 characters";
    }

    setFormErrors(errors);
  };

  return (
    <Fragment>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Serach />

          <UserList
            users={users}
            onUserCreateSubmit={onUserCreateSubmit}
            onUserUpdateSubmit={onUserUpdateSubmit}
            onUserDelete={onUserDelete}
            formValues={formValues}
            formChangeHandler={formChangeHandler}
            formErrors={formErrors}
            validateForm={validateForm}
          />
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
