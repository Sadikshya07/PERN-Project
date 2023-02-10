import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FacultyCard from "../components/FacultyCard";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSection from "../components/HeroSection";

export default function Faculty() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSection url="" title="Faculty" />
        <div className="faculty-card-container m-5 grid grid-cols-3 justify-items-center gap-y-10 p-3">
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
          <FacultyCard />
        </div>
      </HomeLayout>
    </>
  );
}
