import Image from "next/image";
import { Inter } from "next/font/google";
import InstantAds from "@/components/InstantAds";
import Navbar from "@/components/Navbar";
import InstantSocial from "@/components/InstantSocial";
import InstantPieces from "@/components/InstantPieces";
import InstantSales from "@/components/InstantSales";
import InstantSeo from "@/components/InstantSeo";
import InstantAcademic from "@/components/InstantAcademic";
import Pricing from "@/components/Pricing";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InstantAds />
      <InstantSocial />
      <InstantPieces />
      <InstantSales />
      <InstantSeo />
      <InstantAcademic />
      <Pricing />
    </>
  );
}
