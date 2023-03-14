import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import SchoolInMediaCard from "../components/schoolInMediaCard";
import HeroSectionCard from "../components/HeroSection";
import { useEffect } from "react";
import SchoolinMediaFinder from "./api/SchoolinMediaFinder";

export default function SchoolInMedia() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SchoolinMediaFinder.get("/");
        console.log(response.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <link rel="icon" href="/src/assets/favicon.svg" />
      </Head>
      <HomeLayout>
        <HeroSectionCard url="" title="School in Media" />
        <div className="w-11/12 grid grid-cols-3 justify-items-center p-3 m-3 gap-10 mx-auto ">
          <SchoolInMediaCard />
          <SchoolInMediaCard />
          <SchoolInMediaCard />
          <SchoolInMediaCard />
          <SchoolInMediaCard />
        </div>
      </HomeLayout>
    </>
  );
}
