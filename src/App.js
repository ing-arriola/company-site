import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Carrousel from "./Components/Carrousel";
import IconSection from "./Containers/IconSection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carrousel />
      <IconSection />
    </div>
  );
}

export default App;
