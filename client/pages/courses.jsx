import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSection from "../components/HeroSection";
import CoursesCard from "../components/DSSCoursesCard";

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
        <HeroSection title= "Courses" />
        <div className="w-11/12 mx-auto my-7 grid grid-cols-3 gap-3">
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
        </div>
      </HomeLayout>
    </>
  );
}
