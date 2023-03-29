import './App.css';
import { Route, useLocation } from 'react-router-dom';
import Home from "./views/Home/Home"
import Landing from "./views/Landing/Landing"
import Detail from "./views/Detail/Detail"
import NavBar from './components/NavBar/NavBar';
import CreateGame from './views/CreateGame/CreateGame';


function App() {
  const location= useLocation()
  return (
    <>
      <div className="App">
        {location.pathname !== "/" && <NavBar/>}
        <Route exact path="/" component={Landing} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/creategame" render={() => <CreateGame />} />
        <Route path="/detail" render={() => <Detail />} />
      </div>


    </>
  );
}

export default App;
