import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FacultyCard from "../components/FacultyCard";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";
import Spinner from "../components/Spinner";
import FacultyFinder from "./api/FacultyFinder";
import { useEffect, useState } from "react";

export default function Faculty() {
  const [data, setData] = useState();
  const FacultyCards =
    data && // this so that it only happens when the data is fetched
    data.map((person) => {
    
      return (
        <FacultyCard
          key={person.id}
          name={person.name}
          description={person.description}
          department={person.department}
        />
      );
    });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FacultyFinder.get("/");
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
      <HomeLayout>
        <HeroSectionCard url="" title={"Faculty"} />
        {data ? (
          <div className="faculty-card-container grid grid-cols-3 p-3 m-5 gap-5  justify-items-center">
            {FacultyCards}
          </div>
        ) : (
          <Spinner />
        )}
      </HomeLayout>
    </>
  );
}
