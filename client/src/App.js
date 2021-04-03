import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
    <div className="App">
     <Navbar/>
     <Switch>
 {/* components to go here */}
 {/* <Route exact path="/pop" component={Pop}/> */}

     </Switch>
    </div>
    </Router>

</>
  );
}

export default App;
