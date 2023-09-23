import { Component } from "react";
import Counter from "./components/counter";
import Navbar from "./common/navbar";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/counter" Component={Counter} />
        </Routes>
      </>
    );
  }
}

export default App;
