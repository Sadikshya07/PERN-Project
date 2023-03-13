import Head from "next/head";
import CoursesCard from "../components/CoursesCard";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";
import { useEffect, useState } from "react";

export default function Courses() {
  const [heroImage, setHeroImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HeroSectionFinder.get("/Courses");
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
        <div className="courses-content w-11/12 mx-auto my-10">
          <div className="elementary">
            <h1 className="text-2xl font-bold text-orange mb-4">
              Elementary School: Grade 1-4
            </h1>
            <div className="courses-link-container grid md:grid-cols-2 lg:grid-cols-4 mb-10">
              <CoursesCard url="" title="Grade 1" />
            </div>
          </div>
        </div>
        <div className="courses-content w-11/12 mx-auto my-10">
          <div className="elementary">
            <h1 className="text-2xl font-bold text-orange mb-4">
              Middle School: Grade 5-8
            </h1>
            <div className="courses-link-container grid md:grid-cols-2 lg:grid-cols-4 mb-10">
              <CoursesCard url="" title="Grade 5" />
            </div>
          </div>
        </div>
        <div className="courses-content w-11/12 mx-auto my-10">
          <div className="elementary">
            <h1 className="text-2xl font-bold text-orange mb-4">
              High School: Grade 9-12
            </h1>
            <div className="courses-link-container grid md:grid-cols-2 lg:grid-cols-4 mb-10">
              <CoursesCard url="" title="Grade 9" />
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
