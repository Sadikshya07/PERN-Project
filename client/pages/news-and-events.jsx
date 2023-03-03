import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSection from "../components/HeroSection";
import NewsandEventsCard from "../components/NewsandEventsCard";
import NewsandEventsFinder from "./api/NewsandEventsFinder";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";

export default function NewsAndEvents() {
  const [data, setData] = useState();
  useEffect(() => {
    // use effect to fetch the data when the page loads
    const fetchData = async () => {
      // async beacuse it takes time to get the data from the server
      try {
        const response = await NewsandEventsFinder.get("/"); //this is to get the data from the server using axios (axios is used insted of fetch() function)
        // console.log(response.data.data);
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
        <HeroSection title={"News and Events"} />
        {console.log(data)}
        {data ? (
          <div className="wrapper w-11/12 mx-auto">
            <div className="management-grid-container grid grid-cols-3 justify-between">
              {newsAndEventsCards}
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </HomeLayout>
    </>
  );
}
