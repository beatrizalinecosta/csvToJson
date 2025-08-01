import React, { useState } from "react";
import { csvToJson } from "./utils/csvToJson";

function App() {
  const [csv, setCsv] = useState("");
  const [json, setJson] = useState("");

  const handleConvert = () => {
    try {
      const result = csvToJson(csv);
      setJson(JSON.stringify(result, null, 2));
    } catch (e) {
      alert("Erro ao converter CSV.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(json);
    alert("JSON copiado!");
  };

  const handleDownload = () => {
    const blob = new Blob([json], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resultado.json";
    link.click();
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Conversor CSV para JSON</h1>

      <div className="mb-3">
        <label className="form-label">Cole o CSV abaixo:</label>
        <textarea
          className="form-control"
          rows="6"
          value={csv}
          onChange={(e) => setCsv(e.target.value)}
        />
      </div>

      <button className="btn btn-primary me-2" onClick={handleConvert}>
        Converter
      </button>

      {json && (
        <div className="mt-4">
          <h5>Resultado JSON:</h5>
          <pre className="bg-light p-3 border rounded" style={{ maxHeight: "300px", overflow: "auto" }}>{json}</pre>
          <button className="btn btn-success me-2" onClick={handleCopy}>
            Copiar
          </button>
          <button className="btn btn-secondary" onClick={handleDownload}>
            Baixar JSON
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
