import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import projects from './Data/projects';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/ReactPortfolio" exact component={() => <Portfolio projects={projects} />} />
          <Route path="/" exact component={() => <Portfolio projects={projects} />} />
          <Route path="/Contact" exact component={() => <Contact />} />
          <Route path="/Portfolio" exact component={() => <Portfolio projects={projects} />} />
          <Route path="/About" exact component={() => <About projects={projects} />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
