import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Pocetna from "./pages/Pocetna";
import Servisi from "./pages/Servisi";
import Proizvodi from "./pages/Proizvodi";
import Kontakt from "./pages/Kontakt";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/servisi" element={<Servisi />} />
          <Route path="/proizvodi" element={<Proizvodi />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
