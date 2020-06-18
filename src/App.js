import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./CSS/App.css";
import MovieList from "./Components/MovieList/MovieSearch";
import UserList from "./Components/User/UserList";
import CreateUser from "./Components/User/CreateUser";
import Navbar from "./Components/NavBar/Navbar";
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/LogIn/Register";
import UserPage from "./Components/User/UserPage";

//do routes need to be declared at the app level like this?
function App() {
  return (
    <Router>
      <div className="App"></div>
      <Navbar />

      <br />
      {/* <Route path="/" exact component={Navbar} /> */}
      <Route path="/moviesearch" exact component={MovieList} />
      <Route path="/users" exact component={UserList} />
      <Route path="/user/add" exact component={CreateUser} />
      <Route path="/signin" exact component={LogIn} />
      <Route path="/register" exact component={Register} />
      <Route path="/users/:id" exact component={UserPage} />
    </Router>
  );
}

export default App;
