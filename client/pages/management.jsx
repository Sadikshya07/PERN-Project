import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ManagementCard from "../components/ManagementCard";
import HeroSectionCard from "../components/HeroSection";

export default function Management() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <HeroSectionCard url="" title="Management" />
        <div className="management-grid-container flex justify-around gap-[23.5rem]">
          <ManagementCard />
          <ManagementCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
