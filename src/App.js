import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header />
        <Switch>
        </Switch>
    </Router>
  );
}

export default App;
