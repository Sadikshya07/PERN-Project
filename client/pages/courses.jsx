import Head from "next/head";
import CoursesCard from "../components/CoursesCard";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";
import HeroSectionFinder from "./api/HeroSectionFinder";
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
              <CoursesCard
                url="https://deerwalk.edu.np/sifalschool/public/uploads/course/DSS%20-%20COURSE%20CREDIT%20-%20GRADE%201%20-%202080.pdf"
                title="Grade 1"
              />
              <CoursesCard
                url="https://deerwalk.edu.np/sifalschool/public/uploads/course/DSS%20-%20COURSE%20CREDIT%20-%20GRADE%202%20-%202080.pdf"
                title="Grade 2"
              />
              <CoursesCard
                url="https://deerwalk.edu.np/sifalschool/public/uploads/course/DSS%20-%20COURSE%20CREDIT%20-%20GRADE%203%20-%202080.pdf"
                title="Grade 3"
              />
              <CoursesCard
                url="https://deerwalk.edu.np/sifalschool/public/uploads/course/DSS%20-%20COURSE%20CREDIT%20-%20GRADE%204%20-%202080.pdf"
                title="Grade 4"
              />
            </div>
          </div>
        </div>
        <div className="courses-content w-11/12 mx-auto my-10">
          <div className="elementary">
            <h1 className="text-2xl font-bold text-orange mb-4">
              Middle School: Grade 5-8
            </h1>
            <div className="courses-link-container grid md:grid-cols-2 lg:grid-cols-4 mb-10">
              <CoursesCard
                url="https://deerwalk.edu.np/sifalschool/public/uploads/course/DSS%20-%20COURSE%20CREDIT%20-%20GRADE%205%20-%202080.pdf"
                title="Grade 5"
              />
              <CoursesCard
                url="https://deerwalk.edu.np/sifalschool/public/uploads/course/DSS%20-%20COURSE%20CREDIT%20-%20GRADE%206%20-%202080.pdf"
                title="Grade 6"
              />
              <CoursesCard
                url="https://deerwalk.edu.np/sifalschool/public/uploads/course/DSS%20-%20COURSE%20CREDIT%20-%20GRADE%207%20-%202080.pdf"
                title="Grade 7"
              />
              <CoursesCard
                url="https://deerwalk.edu.np/sifalschool/public/uploads/course/DSS%20-%20COURSE%20CREDIT%20-%20GRADE%208%20-%202080.pdf"
                title="Grade 8"
              />
            </div>
          </div>
        </div>
        <div className="courses-content w-11/12 mx-auto my-10">
          <div className="elementary">
            <h1 className="text-2xl font-bold text-orange mb-4">
              High School: Grade 9-12
            </h1>
            <div className="courses-link-container grid md:grid-cols-2 lg:grid-cols-4 mb-10">
              <CoursesCard
                url="https://deerwalk.edu.np/sifalschool/public/uploads/course/DSS%20-%20COURSE%20CREDIT%20-%20GRADE%209%20-%202080.pdf"
                title="Grade 9"
              />
              <CoursesCard
                url="https://deerwalk.edu.np/sifalschool/public/uploads/course/DSS%20-%20COURSE%20CREDIT%20-%20GRADE%2010%20-%202080.pdf"
                title="Grade 10"
              />
              <CoursesCard
                url="https://deerwalk.edu.np/sifalschool/public/uploads/course/DSS%20-%20COURSE%20CREDIT%20-%20GRADE%2011%20-%202080.pdf"
                title="Grade 11"
              />
              <CoursesCard
                url="https://deerwalk.edu.np/sifalschool/public/uploads/course/DSS%20-%20COURSE%20CREDIT%20-%20GRADE%2012%20-%202080.pdf"
                title="Grade 12"
              />
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
