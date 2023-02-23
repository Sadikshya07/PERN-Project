import Head from "next/head";
import AnalysisReportCard from "../components/TermandAnalysisCard";
import HeroSectionCard from "../components/HeroSection";
import HomeLayout from "../components/Layouts/HomeLayout";

export default function AnalysisReport() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSectionCard url=" " title="Analysis Report" />
        <div className="analysis-report-grid-container grid grid-cols-4">
          <AnalysisReportCard />
          <AnalysisReportCard />
          <AnalysisReportCard />
          <AnalysisReportCard />
        </div>
      </HomeLayout>
    </>
  );
}
