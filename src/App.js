import './App.css';
import Header from './Pages/Shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <Header></Header>
        </Route>
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Route>
          <Footer></Footer>
        </Route>
      </Router>
    </div>
  );
}

export default App;
