import './App.css';
import Header from './Pages/Shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <Header></Header>
        </Route>
        <Switch>
          <Route>
            <Home></Home>
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
