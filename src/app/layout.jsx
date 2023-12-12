import { Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

// Select a weight from the available options
const poppins = Poppins({
  weight: ["400", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata = {
  title: "Masjid Nuruddin",
  description: "Masjid Nuruddin Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} `}
        suppressContentEditableWarning={true}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
