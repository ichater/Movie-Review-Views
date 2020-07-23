import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./CSS/App.css";
import UserList from "./Components/User/UserList";
import CreateUser from "./Components/User/CreateUser";
import Navbar from "./Components/NavBar/Navbar";
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/LogIn/Register";
import MovieContainer from "./Components/MovieList/MovieContainer";
import UserPageContainer from "./Components/User/UserPageContainer";
import MoviePosterBackground from "./Components/Background/MoviePosterBackground";
import UserMovieListContainer from "./Components/UserMovieList/UserMovieListContainer";

//do routes need to be declared at the app level like this?
function App() {
  return (
    <Router>
      <div className="App"></div>
      <Navbar />
      <MoviePosterBackground />
      {/* <br /> */}
      {/* <Route path="/" exact component={Navbar} /> */}
      <Route path="/MovieSearch" exact component={MovieContainer} />
      <Route path="/users" exact component={UserList} />
      <Route path="/user/add" exact component={CreateUser} />
      <Route path="/signin" exact component={LogIn} />
      <Route path="/register" exact component={Register} />
      <Route path="/users/:id" exact component={UserPageContainer} />
      <Route path="/movielist/:id" exact component={UserMovieListContainer} />
    </Router>
  );
}

export default App;
