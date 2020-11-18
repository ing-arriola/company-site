import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Carrousel from "./Components/Carrousel";
import IconSection from "./Containers/IconSection";
import Home from "./Containers/Home";
import VideoContainer from "./Containers/VideoContainer";
import Gallery from "./Components/Gallery";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carrousel />
      <IconSection />
      <Home />
      <VideoContainer />
      <Gallery />
    </div>
  );
}

export default App;
