import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";
import HeroSectionFinder from "./api/HeroSectionFinder";
import StudentCornerCard from "../components/StudentCornerCard";
import { useEffect, useState } from "react";
import StudentCornerFinder from "./api/StudentCornerFinder";

export default function StudentCorner() {
  const [heroImage, setHeroImage] = useState();
  const [studentData, setStudentData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HeroSectionFinder.get("/Student Corner");
        const response2 = await StudentCornerFinder.get("/");
        setStudentData(response2.data.data);
        console.log(response2.data.data);
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
        <div className="mx-auto my-10 grid w-11/12 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10">
          {studentData &&
            studentData.map((data) => {
              return (
                <StudentCornerCard
                  key={data.id}
                  id={data.id}
                  description={data.articlecontent}
                  title={data.articletitle}
                  grade={data.grade}
                  image={data.image}
                  name={data.studentname}
                  rollno={data.rollnumber}
                />
              );
            })}
        </div>
      </HomeLayout>
    </>
  );
}
