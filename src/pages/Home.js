import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div class="d-flex justify-content-md-center align-items-center vh-100">
      <div class="px-4 py-5 my-5 text-center"> 
        <h1 class="display-5 fw-bold text-body-emphasis">CSV/JSON Converter</h1> 
        <div class="col-lg-6 mx-auto"> 
          <p class="lead mb-4">Use this app to convert CSV files or inputs to JSON files. Or convert JSON files and inputs to CSV files.</p> 
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
              <button className="btn btn-outline-success" onClick={() => navigate("/csv-to-json")}>
                  CSV to JSON
                </button> 
              <button className="btn btn-outline-warning" onClick={() => navigate("/json-to-csv")}>
                  JSON to CSV
                </button>
            </div> 
        </div> 
      </div>
    </div>
  );
}

export default Home;



