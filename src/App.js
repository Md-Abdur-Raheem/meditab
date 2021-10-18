import './App.css';
import Header from './Pages/Shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <Header></Header>
        </Route>
      </Router>
    </div>
  );
}

export default App;
