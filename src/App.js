import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CSS/App.css";
import UserList from "./Components/User/UserList";
import CreateUser from "./Components/User/CreateUser";
import Navbar from "./Components/NavBar/Navbar";
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/LogIn/Register";
import MovieContainer from "./Components/MovieList/MovieContainer";
import UserPageContainer from "./Components/User/UserPageContainer";
import MoviePosterBackground from "./Components/Background/MoviePosterBackgroundWrapper";
import UserMovieListContainer from "./Components/UserMovieList/UserMovieListContainer";
import Alert from "./Components/layout/Alert";
//Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App"></div>
        <Navbar />
        <MoviePosterBackground />
        {/* <br /> */}
        {/* <Route path="/" exact component={Navbar} /> */}
        <Route path="/MovieSearch" exact component={MovieContainer} />
        <Route path="/users" exact component={UserList} />
        <Route path="/user/add" exact component={CreateUser} />
        <section>
          <Alert />
          <Switch>
            <Route path="/signin" exact component={LogIn} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </section>
        <Route path="/users/:id" exact component={UserPageContainer} />
        <Route path="/movielist/:id" exact component={UserMovieListContainer} />
      </Router>
    </Provider>
  );
}

export default App;
