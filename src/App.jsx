import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import NavBar
import NavBar from "./components/NavBar";

// Import Footer
import Footer from "./components/Footer";

// Imports des pages
import Home from "./pages/Home";
import Guild from "./pages/Guild";
import Member from "./pages/Member";
import Events from "./pages/Events";
import Join from "./pages/Join";

function App() {
  return (
    <BrowserRouter basename="/serenity">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guilde" element={<Guild />} />
        <Route path="/membres" element={<Member />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rejoindre" element={<Join />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
