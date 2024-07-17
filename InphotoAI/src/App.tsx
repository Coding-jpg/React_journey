import "./App.css";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Tool from "./Pages/Tool";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tool" element={<Tool />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
