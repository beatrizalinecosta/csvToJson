import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="mb-5">Bem-vindo ao Conversor</h1>
      <button className="btn btn-primary btn-lg me-3" onClick={() => navigate("/csv-to-json")}>
        CSV para JSON
      </button>
      <button className="btn btn-success btn-lg" onClick={() => navigate("/json-to-csv")}>
        JSON para CSV
      </button>
    </div>
  );
}

export default Home;
