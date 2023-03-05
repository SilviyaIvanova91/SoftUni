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
          />
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
