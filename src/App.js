import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Dynamic/Home';
import Movies from "./components/Dynamic/Movies";
import Serieses from "./components/Dynamic/Serieses";
import Footer from './components/Static/Footer';
import Header from './components/Static/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Serieses />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="*" element={<Home />} /> */}
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
