import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Pastes from "./Components/Pastes";
import ViewPaste from "./Components/ViewPaste";
import Navbar from "./Components/Navbar";
import  { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/pastes"
            element={
              <>
                <Navbar />
                <Pastes />
              </>
            }
          />
          <Route
            path="/paste/:id"
            element={
              <>
                <Navbar />
                <ViewPaste />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
