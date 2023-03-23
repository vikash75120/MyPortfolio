import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-black min-h-screen min-w-full">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
