// pages/api/jadwal-sholat.js
export default async function handler(req, res) {
  try {
    // Mendapatkan tanggal sekarang
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL2}/${currentYear}/${currentMonth}.json`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Gagal mengambil data dari API. Status: ${response.status}`
      );
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan dalam mengambil data dari API." });
  }
}
