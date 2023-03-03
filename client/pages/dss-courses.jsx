import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSection from "../components/HeroSection";
import DSSCoursesCard from "../components/DSSCoursesCard";
import Spinner from "../components/Spinner";
import { useEffect,useState } from "react";
import DssCoursesFinder from "./api/DssCoursesFinder";

export default function DSSCourses() {
  const [data, setData] = useState();
  const DSSCoursesCards =
  data &&
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
          <div className="w-11/12 mx-auto my-7 grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-3">
            {DSSCoursesCards}
          </div>
        ) : (
          <Spinner />
        )}
      </HomeLayout>
    </>
  );
}
