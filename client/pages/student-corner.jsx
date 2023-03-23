import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";
import HeroSectionFinder from "./api/HeroSectionFinder";
import StudentCornerCard from "../components/StudentCornerCard";
import { useEffect, useState } from "react";

export default function StudentCorner() {
  const [heroImage, setHeroImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HeroSectionFinder.get("/Student Corner");
        setHeroImage(response.data.data);
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        {heroImage && (
          <HeroSectionCard url={heroImage.Image} title={heroImage.Page} />
        )}
        <div className="mx-auto my-10 grid w-11/12 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10">
          <StudentCornerCard />
          <StudentCornerCard />
          <StudentCornerCard />
          <StudentCornerCard />
        </div>
      </HomeLayout>
    </>
  );
}
