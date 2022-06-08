import React from "react";
import "./Home.css";
import Person from "./Person";
import Jobs from "./Jobs";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="home">
      <aside className="aside">
        <Person></Person>
      </aside>
      <main className="main">
        <Jobs></Jobs>
      </main>
    </div>
  );
}

export default Home;
