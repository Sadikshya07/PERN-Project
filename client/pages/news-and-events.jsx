import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";
import NewsandEventsCard from "../components/NewsandEventsCard";
import NewsandEventsFinder from "./api/NewsandEventsFinder";
import HeroSectionFinder from "./api/HeroSectionFinder";

import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";

export default function NewsAndEvents() {
  const [data, setData] = useState();
  const [heroImage, setHeroImage] = useState();

  useEffect(() => {
    // use effect to fetch the data when the page loads
    const fetchData = async () => {
      // async beacuse it takes time to get the data from the server
      try {
        const response = await NewsandEventsFinder.get("/"); //this is to get the data from the server using axios (axios is used insted of fetch() function)
        // console.log(response.data.data);
        const response2 = await HeroSectionFinder.get("/News & Events");
        setHeroImage(response2.data.data);
        setData(response.data.data); //set the received responses data to  to data variable at above
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const newsAndEventsCards =
    data && // this so that it only happens when the data is fetched
    data.map((news) => {
      return (
        <NewsandEventsCard
          EventsCard
          key={news.id}
          id={news.id}
          title={news.title}
          description={news.description}
          author={news.author}
          publishdate={news.publishdate}
          image1={news.image1}
        />
      );
    });
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <h1 className="text-orange text-3xl text-center font-bold m-10">
          News and Events
        </h1>
        {heroImage && (
          <HeroSectionCard url={heroImage.Image} title={heroImage.Page} />
        )}
        {data ? (
          <div className=" w-11/12 mx-auto my-8 grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsAndEventsCards}
          </div>
        ) : (
          <Spinner />
        )}
      </HomeLayout>
    </>
  );
}
