import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TermandAnalysisReport from "../components/TermandAnalysisCard";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import AnalysisReportFinder from "./api/AnalysisReportFinder";

export default function AnalysisReport() {
  const [data, setData] = useState();
  const AnalysisReportCard =
  data && // this so that it only happens when the data is fetched
  data.map((person) => {
    return (
      <AnalysisReportCard
        key={person.id}
        name={person.name}
      />
    );
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AnalysisReportFinder.get("/"); //this is to get the data from the server using axios (axios is used insted of fetch() function)
        // console.log(response.data.data);
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
        {/* hero section here */}
        < TermandAnalysisReport url="" title="AnalysisReport"/>
        {
          data ? (
            <div className="analysisreport-grid-container flex justify-around">
              {TermandAnalysisReport}
            </div>
          ) : (
            <Spinner />
          )
        }
      </main>
      <Footer />
    </>
  )
}
