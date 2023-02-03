import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSection from "../components/HeroSection";
import DSSCoursesCard from "../components/DSSCoursesCard";

export default function DSSCourses() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSection title={"DSS Courses"} />
        <div className="w-11/12 mx-auto my-7 grid grid-cols-3 gap-3">
          <DSSCoursesCard />
          <DSSCoursesCard />
          <DSSCoursesCard />
          <DSSCoursesCard />
          <DSSCoursesCard />
          <DSSCoursesCard />
        </div>
      </HomeLayout>
    </>
  );
}
