import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TermandAnalysisReport from "../components/TermandAnalysisCard";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import AnalysisReportFinder from "./api/AnalysisReportFinder";
import HeroSectionCard from "../components/HeroSection";

export default function AnalysisReport() {
  const [data, setData] = useState();
  const [heroImage, setHeroImage] = useState();

  const AnalysisReportCards =
    data && // this so that it only happens when the data is fetched
    data.map((person) => {
      return <TermandAnalysisReport key={person.id} name={person.name} />;
    });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AnalysisReportFinder.get("/");
        const response2 = await HeroSectionFinder.get("/Analysis Report");
        setHeroImage(response2.data.data);

        setData(response.data.data);
      } catch (err) {
        console.log(err);
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
      <Navbar />
      <main>
        {heroImage && (
          <HeroSectionCard url={heroImage.Image} title={heroImage.Page} />
        )}
        <TermandAnalysisReport url="" title="AnalysisReport" />
        {data ? (
          <div className="analysis-report-grid-container grid md:grid-cols-2 lg:grid-cols-4">
            {AnalysisReportCards}
          </div>
        ) : (
          <Spinner />
        )}
      </main>
      <Footer />
    </>
  );
}
