import "./App.css";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
