export function jsonToCsv(jsonText) {
  let json;
  try {
    json = JSON.parse(jsonText);
  } catch {
    throw new Error("Invalid JSON.");
  }

  if (!Array.isArray(json) || json.length === 0) {
    throw new Error("JSON must be an object array.");
  }

  const headers = Object.keys(json[0]);
  const csvRows = [headers.join(",")];

  for (const obj of json) {
    const row = headers.map(header => {
      const val = obj[header] ?? "";
      // Escapar aspas e vírgulas
      return `"${String(val).replace(/"/g, '""')}"`;
    });
    csvRows.push(row.join(","));
  }

  return csvRows.join("\n");
}
