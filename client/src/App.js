import './App.css';

import { Route } from 'react-router-dom';
import { Home, Landing, Form, Detail } from './views'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <div className="App">

        {location.pathname !== "/"} <NavBar/>
        <Route exact path="/" component={Landing} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/form" render={() => <Form />} />
        <Route path="/detail" render={() => <Detail />} />
      </div>


    </>
  );
}

export default App;
