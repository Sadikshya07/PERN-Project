import Head from "next/head";
import TheDeerwalkerCard from "../components/TermandAnalysisCard";
import HeroSectionCard from "../components/HeroSection";
import HomeLayout from "../components/Layouts/HomeLayout";
import { useEffect, useState } from "react";

export default function TheDeerwalker() {
  const [heroImage, setHeroImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HeroSectionFinder.get("/The Deerwalker");
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
        <div className="the-deerwalker-grid-container grid md:grid-cols-2 lg:grid-cols-4">
          <TheDeerwalkerCard name = "The Deerwalker Vol 5 Issue 5 Number 12"/>
          <TheDeerwalkerCard name = "The Deerwalker Vol 5 Issue 5 Number 12"/>
          <TheDeerwalkerCard name = "The Deerwalker Vol 5 Issue 5 Number 12"/>
          <TheDeerwalkerCard name = "The Deerwalker Vol 5 Issue 5 Number 12"/>
        </div>
      </HomeLayout>
    </>
  );
}
