import { Lexend, Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "@/common/Navbar";
import Footer from "@/common/Footer";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-sans",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "My New Project",
  description: "Using Lexend & Epilogue fonts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${epilogue.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
