import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CSS/App.css";
import UserList from "./Components/User/UserList";
import Navbar from "./Components/NavBar/Navbar";
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/LogIn/Register";
import MovieContainer from "./Components/MovieList/MovieContainer";
import UserPageContainer from "./Components/User/UserPageContainer";
import Pofiles from "./Components/Profiles/Profiles";
import MoviePosterBackground from "./Components/Background/MoviePosterBackgroundWrapper";
import UserMovieListContainer from "./Components/UserMovieList/UserMovieListContainer";
import EditProfile from "./Components/Profile-Form/EditProfile";
import AddMovieQuote from "./Components/Profile-Form/AddMovieQuote";
import DashBoard from "./Components/Dashboard/Dashboard";
import CreateProfile from "./Components/Profile-Form/CreateProfile";
import PrivateRoute from "./Components/Routing/PrivateRoute";
import Alert from "./Components/layout/Alert";

//Redux
import { loadUser } from "./actions/auth";
import { Provider } from "react-redux";
import setAuthToken from "./Utilities/setAuthToken";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App"></div>
        <Navbar />
        <MoviePosterBackground />
        {/* <br /> */}
        {/* <Route path="/" exact component={Navbar} /> */}
        <Route path="/MovieSearch" exact component={MovieContainer} />
        <Route path="/profiles" exact component={Pofiles} />

        <section>
          <Alert />
          <Switch>
            <Route path="/login" exact component={LogIn} />
            <Route path="/register" exact component={Register} />
            <PrivateRoute path="/DashBoard" exact component={DashBoard} />
            <PrivateRoute
              path="/CreateProfile"
              exact
              component={CreateProfile}
            />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute
              exact
              path="/add-movie-quote"
              component={AddMovieQuote}
            />
          </Switch>
        </section>

        <Route path="/users/:id" exact component={UserPageContainer} />
        <Route path="/movielist/:id" exact component={UserMovieListContainer} />
      </Router>
    </Provider>
  );
}

export default App;
