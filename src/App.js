import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Homepage";
import JobDetail from "./components/pages/JobDetail";
import JobsList from "./components/pages/JobsList";
import Login from "./components/pages/Login";
import Navbarr from "./components/pages/Navbarr";

function App() {
  let [isAuthenticate, setIsAuthenticate] = useState(false);

  const ProtectedRoute = (props) => {
    if (isAuthenticate === true) {
      return <Route {...props} />;
    } else {
      // history.pushState("/login");
      return <Redirect to="/login" />;
    }
  };

  return (
    <div className="App">
      <Navbarr />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/login"
          exact
          component={() => <Login setIsAuthenticate={setIsAuthenticate} />}
        />
        <Route path="/jobs" exact component={JobsList} />
        {/* <Route path="/jobs/:id" component={JobDetail} /> */}
        <ProtectedRoute path="/job/:id" exact component={JobDetail} />
      </Switch>
    </div>
  );
}

export default App;
