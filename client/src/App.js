import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/Landing/Landing';

function App() {
  return (
    <>
      <Router>
    <div className="App">
     <Navbar/>
     <Switch>
 <Route exact path="/" component={Landing}/>

     </Switch>
    </div>
    </Router>

</>
  );
}

export default App;
