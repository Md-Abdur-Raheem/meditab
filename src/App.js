import './App.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/Register/Register';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Doctors from './Pages/Doctors/Doctors';
import Contacts from './Pages/Contacts/Contacts';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivataRoute/PrivataRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Header></Header>

          <Switch>
            <Route exact path = "/">
              <Home></Home>
            </Route>

            <Route path = "/home">
              <Home></Home>
            </Route>

            <Route path = "/about">
              <About></About>
            </Route>

            <Route path = "/services">
              <Services></Services>
            </Route>

            <PrivateRoute path = "/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

            <PrivateRoute path = "/contacts">
              <Contacts></Contacts>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

            <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
