import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Serach } from "./components/Serach";
import { UserList } from "./components/User/UserList";

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Serach />

          <UserList />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
