import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/ReactPortfolio" exact component={() => <About />} />
          <Route path="/" exact component={() => <About />} />
          <Route path="/Contact" exact component={() => <Contact />} />
          <Route path="/Portfolio" exact component={() => <Portfolio/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
