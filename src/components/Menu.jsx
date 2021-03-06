import React from "react";
import "../style/menu.css";
import Destiny from "../resource/destiny.jpg";

import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Classes from "./TodosUsingClasses/ToDoTasks";
import Hooks from "./TodosUsingHooks/ToDoTasks";

export default function Menu() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/hooks" element={<Hooks />} />
        </Routes>
        <div className="navSecond ">
          <button>
            <NavLink to="/classes">Class კომპონენტები</NavLink>
          </button>
          <button>
            <NavLink to="/hooks">Hooks კომპონენტები</NavLink>
          </button>
        </div>
        <div className="nav">
          <button>
            <NavLink to="/">მთავარი გვერდი</NavLink>
          </button>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className="homePage">
      <h1>Welcome to My To Do World....</h1>
      <img src={Destiny} alt="destiny" className="destiny" />
      <h2>Choose your destiny</h2>
    </div>
  );
}
