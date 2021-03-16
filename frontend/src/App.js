import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdminInterface from "./pages/AdminInterface";
import AdminLogin from "./pages/AdminLogin";
import Cv from "./pages/Cv";
import ContactEntries from "./pages/ContactEntries";
import Portfolio from "./pages/Portfolio";
import ProtectedRoute from "./components/ProtectedRoute";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddUser from "./pages/AddUser";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/cv' component={Cv} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/admin-interface' component={AdminInterface} />
        <Route path='/admin-login' component={AdminLogin} />
        <ProtectedRoute path='/contact-entries' component={ContactEntries} />
        <ProtectedRoute path='/add-user' component={AddUser} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
