import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import SchoolInMediaCard from "../components/schoolInMediaCard";
import HeroSectionCard from "../components/HeroSection";
import { useEffect, useState } from "react";
import SchoolinMediaFinder from "./api/SchoolinMediaFinder";
import HeroSectionFinder from "./api/HeroSectionFinder";

export default function SchoolInMedia() {
  const [data, setData] = useState();
  const [heroImage, setHeroImage] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SchoolinMediaFinder.get("/");
        const response2 = await HeroSectionFinder.get("/School in Media");
        setHeroImage(response2.data.data);
        setData(response.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const schoolinMediaMapped =
    data &&
    data.map((item) => {
      return (
        <SchoolInMediaCard
          key={item.id}
          link={item.Link}
          author={item.author}
          image={item.Image}
          title={item.title}
        />
      );
    });

  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <link rel="icon" href="/src/assets/favicon.svg" />
      </Head>
      <HomeLayout>
        {heroImage && (
          <HeroSectionCard url={heroImage.Image} title={heroImage.Page} />
        )}
        <div className="w-11/12 grid grid-cols-3 justify-items-center p-3 m-3 gap-10 mx-auto ">
          {console.log(data)}
          {schoolinMediaMapped}
        </div>
      </HomeLayout>
    </>
  );
}
