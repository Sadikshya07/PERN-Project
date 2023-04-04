import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FacultyCard from "../components/FacultyCard";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";
import Spinner from "../components/Spinner";
import FacultyFinder from "./api/FacultyFinder";
import { useEffect, useState } from "react";
import HeroSectionFinder from "./api/HeroSectionFinder";

export default function Faculty() {
  const [data, setData] = useState();
  const [heroImage, setHeroImage] = useState();
  const FacultyCards =
    data && // this so that it only happens when the data is fetched
    data.map((person) => {
      return (
        <FacultyCard
          key={person.id}
          name={person.name}
          image={person.image}
          description={person.description}
          department={person.department}
          AreaofExpertise={person.AreaofExpertise}
          Experience={person.Experience}
        />
      );
    });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FacultyFinder.get("/");
        const response2 = await HeroSectionFinder.get("/Faculty");
        // console.log(response.data.data);
        setData(response.data.data);
        setHeroImage(response2.data.data);
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
        {heroImage && (
          <HeroSectionCard url={heroImage.Image} title={heroImage.Page} />
        )}
        {data ? (
          <div className="faculty-card-container w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 p-3 m-5 gap-5 justify-items-center">
            {FacultyCards}
          </div>
        ) : (
          <Spinner />
        )}
      </HomeLayout>
    </>
  );
}
