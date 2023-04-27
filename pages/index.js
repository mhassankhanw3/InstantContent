import Image from "next/image";
import { Inter } from "next/font/google";
import InstantAds from "@/components/InstantAds";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <InstantAds />
    </>
  );
}
