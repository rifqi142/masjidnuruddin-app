import { Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import Copyright from "@/components/Footer/Copyright";
import { AOSInit } from "@/libs/aos";

const poppins = Poppins({
  weight: ["400", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata = {
  title: "Masjid Nuruddin",
  description:
    "Selamat Datang di Masjid Nuruddin Jakarta Barat. Menikmati keindahan spiritual di Masjid ini yang berlokasi di Jl. H. Sa'aba No.7, RT.8/RW.3, Kelurahan Meruya Selatan, Kecamatan Kembangan, Kota Jakarta Barat. Temukan ketenangan dan keberkahan dalam suasana penuh kehormatan dan damai di Masjid Nuruddin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        className={`${poppins.className} `}
        suppressContentEditableWarning={true}
      >
        <NavBar />
        {children}
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
