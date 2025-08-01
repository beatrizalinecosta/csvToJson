export function csvToJson(csvText) {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(",");

  const jsonData = lines.slice(1).map(line => {
    const values = line.split(",");
    const entry = {};
    headers.forEach((header, i) => {
      entry[header.trim()] = values[i]?.trim() || "";
    });
    return entry;
  });

  return jsonData;
}
