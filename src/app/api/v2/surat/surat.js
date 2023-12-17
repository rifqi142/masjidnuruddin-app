import initMiddleware from "@/middlewares/cors";
import { GET } from "@/api/route";
const cors = initMiddleware();

const handler = async (req, res) => {
  await cors(req, res);

  const { id } = req.query;

  try {
    // Construct the correct API URL
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/surat/${id}`;

    // Fetch data using the URL directly
    const alquranResponse = await fetch(apiUrl);

    // Parse the JSON response
    const alquranData = await alquranResponse.json();

    res.status(200).json(alquranData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
