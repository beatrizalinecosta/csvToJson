import React, { useState } from "react";
import { jsonToCsv } from "../utils/jsonToCsv";

function JsonToCsvPage() {
  const [jsonInput, setJsonInput] = useState("");
  const [csvOutput, setCsvOutput] = useState("");

  const handleConvert = () => {
    try {
      const result = jsonToCsv(jsonInput);
      setCsvOutput(result);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(csvOutput);
    alert("CSV copiado!");
  };

  const handleDownload = () => {
    const blob = new Blob([csvOutput], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resultado.csv";
    link.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setJsonInput(reader.result);
      try {
        const result = jsonToCsv(reader.result);
        setCsvOutput(result);
      } catch (err) {
        alert("Erro ao converter JSON.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <h2 className="mb-4">JSON para CSV</h2>

      <div className="mb-3">
        <label className="form-label">Upload de arquivo JSON:</label>
        <input type="file" className="form-control" accept=".json" onChange={handleFileUpload} />
      </div>

      <textarea
        className="form-control mb-3"
        rows="6"
        placeholder="Cole aqui o JSON..."
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />

      <button className="btn btn-primary me-2" onClick={handleConvert}>Converter</button>

      {csvOutput && (
        <>
          <h5 className="mt-4">Resultado CSV:</h5>
          <pre className="bg-light p-3 border rounded" style={{ maxHeight: "300px", overflow: "auto" }}>
            {csvOutput}
          </pre>
          <button className="btn btn-success me-2" onClick={handleCopy}>Copiar</button>
          <button className="btn btn-secondary" onClick={handleDownload}>Baixar CSV</button>
        </>
      )}
    </div>
  );
}

export default JsonToCsvPage;
