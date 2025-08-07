import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CsvToJsonPage from "./pages/CsvToJsonPage";
import JsonToCsvPage from "./pages/JsonToCsvPage";
//import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/csvToJson" element={<Home />} />
          <Route path="/csv-to-json" element={<CsvToJsonPage />} />
          <Route path="/json-to-csv" element={<JsonToCsvPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
