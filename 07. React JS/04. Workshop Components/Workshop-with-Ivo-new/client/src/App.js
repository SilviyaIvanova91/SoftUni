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

  return (
    <Fragment>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Serach />

          <UserList users={users} />

          <button className="btn-add btn">Add new user</button>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
