import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Papa Trends",
  description:
    "Papa Trends is the ultimate blog for discovering the latest and greatest modern products for consumers in the US, UK and Canada. Whether you're searching for cutting-edge gadgets, stylish home decor, or the newest fashion trends, Papa Trends offers expertly curated recommendations tailored to your needs. Our blog is dedicated to providing up-to-date reviews and insights, ensuring you stay ahead of the curve in every aspect of modern living. Trust Papa Trends to be your go-to source for high-quality product suggestions that enhance your lifestyle. Visit us regularly to stay informed and make the best purchasing decisions effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="papaTrendsTheme"
      className="p-2 md:px-5 bg-black text-white"
    >
      <body className={`${roboto.className} `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
