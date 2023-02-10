import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSection from "../components/HeroSection";
import CoursesCard from "../components/CoursesCard";

export default function Courses() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSection title="Courses" />
        <div className="courses-content w-11/12 mx-auto my-10">
          <div className="elementary">
            <h1 className="text-2xl font-bold text-orange mb-4">
              Elementary School: Grade 1-4
            </h1>
            <div className="courses-link-container grid grid-cols-4 mb-10">
              <CoursesCard url = "" title = "Grade 1"/> 
            </div>
          </div>
        </div>
        <div className="courses-content w-11/12 mx-auto my-10">
          <div className="elementary">
            <h1 className="text-2xl font-bold text-orange mb-4">
              Middle School: Grade 5-8
            </h1>
            <div className="courses-link-container grid grid-cols-4 mb-10">
              <CoursesCard url = "" title = "Grade 5"/> 
            </div>
          </div>
        </div>
        <div className="courses-content w-11/12 mx-auto my-10">
          <div className="elementary">
            <h1 className="text-2xl font-bold text-orange mb-4">
              High School: Grade 9-12
            </h1>
            <div className="courses-link-container grid grid-cols-4 mb-10">
              <CoursesCard url = "" title = "Grade 9"/> 
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
