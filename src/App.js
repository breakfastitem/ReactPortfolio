import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Header />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
