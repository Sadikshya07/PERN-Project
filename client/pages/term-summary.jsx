import Head from "next/head";
import TermSummaryCard from "../components/TermandAnalysisCard";
import HeroSectionCard from "../components/HeroSection";
import HeroSectionFinder from "./api/HeroSectionFinder";

import HomeLayout from "../components/Layouts/HomeLayout";
import { useEffect, useState } from "react";

export default function TheDeerwalker() {
  const [heroImage, setHeroImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HeroSectionFinder.get("/Term Summary");
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
        <div className="term-summary-grid-container grid md:grid-cols-2 lg:grid-cols-4 gap-y-10">
          <TermSummaryCard name="Term Summary-Term III, 2078" />
          <TermSummaryCard name="Term Summary-Term III, 2078" />
          <TermSummaryCard name="Term Summary-Term III, 2078" />
          <TermSummaryCard name="Term Summary-Term III, 2078" />
          <TermSummaryCard name="Term Summary-Term III, 2078" />
        </div>
      </HomeLayout>
    </>
  );
}
