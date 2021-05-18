import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Outer from './Outer'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import AlwaysRendering from './AlwaysRendering'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <AlwaysRendering></AlwaysRendering>
          <Route path='' component={Outer} exact></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
