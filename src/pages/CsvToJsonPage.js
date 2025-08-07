import React, { useState } from "react";
import { csvToJson } from "../utils/csvToJson";

function CsvToJsonPage() {
  const [csvInput, setCsvInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");

  const handleConvert = () => {
    try {
      const result = csvToJson(csvInput);
      setJsonOutput(JSON.stringify(result, null, 2));
    } catch {
      alert("Erro ao converter CSV.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonOutput);
    alert("JSON copiado!");
  };

  const handleDownload = () => {
    const blob = new Blob([jsonOutput], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resultado.json";
    link.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCsvInput(reader.result);
      try {
        const result = csvToJson(reader.result);
        setJsonOutput(JSON.stringify(result, null, 2));
      } catch {
        alert("Erro ao converter.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h2 className="mb-4">CSV para JSON</h2>

      <div className="mb-3">
        <label className="form-label">Upload de arquivo CSV:</label>
        <input type="file" className="form-control" accept=".csv" onChange={handleFileUpload} />
      </div>

      <textarea
        className="form-control mb-3"
        rows="6"
        placeholder="Cole aqui o CSV..."
        value={csvInput}
        onChange={(e) => setCsvInput(e.target.value)}
      />

      <button className="btn btn-primary me-2" onClick={handleConvert}>Converter</button>

      {jsonOutput && (
        <>
          <h5 className="mt-4">Resultado JSON:</h5>
          <pre className="bg-light p-3 border rounded" style={{ maxHeight: "300px", overflow: "auto" }}>
            {jsonOutput}
          </pre>
          <button className="btn btn-success me-2" onClick={handleCopy}>Copiar</button>
          <button className="btn btn-secondary" onClick={handleDownload}>Baixar JSON</button>
        </>
      )}
    </div>
  );
}

export default CsvToJsonPage;
