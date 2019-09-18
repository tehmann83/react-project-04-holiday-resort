import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/rooms/" exact component={Rooms}></Route>
        <Route path="/rooms/:id" exact component={SingleRoom}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
