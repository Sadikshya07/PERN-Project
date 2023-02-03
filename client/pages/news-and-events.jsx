import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSection from "../components/HeroSection";
import NewsandEventsCard from "../components/NewsandEventsCard";

export default function NewsAndEvents() {
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
        <div className="w-11/12 grid grid-cols-3 justify-items-center p-3 m-3 gap-10  ">
          <NewsandEventsCard />
          <NewsandEventsCard />
          <NewsandEventsCard />
          <NewsandEventsCard />
          <NewsandEventsCard />
          <NewsandEventsCard />
        </div>
      </HomeLayout>
    </>
  );
}
