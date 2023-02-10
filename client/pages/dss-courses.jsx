import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSection from "../components/HeroSection";
import DSSCoursesCard from "../components/DSSCoursesCard";
import Spinner from "../components/Spinner";
import { useEffect,useState } from "react";

export default function DSSCourses() {
  const [data, setData] = useState();
  const DSSCoursesCard =
  data && // this so that it only happens when the data is fetched
  data.map((Courses) => {
    return (
      <DSSCoursesCard
        key={Courses.id}
        name={Courses.name}
        description={Courses.description}
      />
    );
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DssCoursesFinder.get("/");
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
        <HeroSection title={"DSS Courses"} />
        {data ? (
          <div className="w-11/12 mx-auto my-7 grid grid-cols-3 gap-3">
          <DSSCoursesCard />
          <DSSCoursesCard />
          <DSSCoursesCard />
          <DSSCoursesCard />
          <DSSCoursesCard />
          <DSSCoursesCard />
            {DSSCoursesCard}
          </div>
        ) : (
          <Spinner />
        )}
      </HomeLayout>
    </>
  );
}
