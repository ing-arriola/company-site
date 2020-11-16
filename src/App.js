import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Carrousel from "./Components/Carrousel";
import IconSection from "./Containers/IconSection";
import Home from "./Containers/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carrousel />
      <IconSection />
      <Home />
    </div>
  );
}

export default App;
