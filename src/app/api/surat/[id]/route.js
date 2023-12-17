const fetch = require("node-fetch");

export default async function handler(req, res) {
  const { id } = req.query;
  const apiUrl = `https://equran.id/api/v2/surat/${id}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
