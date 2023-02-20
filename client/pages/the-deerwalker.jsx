import Head from "next/head";
import TheDeerwalkerCard from "../components/TermandAnalysisCard";
import HeroSectionCard from "../components/HeroSection";
import HomeLayout from "../components/Layouts/HomeLayout";

export default function TheDeerwalker() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSectionCard url=" " title="The Deerwalker" />
        <div className="term-summary-grid-container grid grid-cols-4">
          <TheDeerwalkerCard />
          <TheDeerwalkerCard />
          <TheDeerwalkerCard />
          <TheDeerwalkerCard />
        </div>
      </HomeLayout>
    </>
  );
}
