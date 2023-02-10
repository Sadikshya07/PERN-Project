import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";
import PodcastCard from "../components/PodcastCard";

export default function Podcast() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSectionCard url=" " title="Read Aloud Podcast" />
        <div className="mx-auto my-10 grid w-11/12 grid-cols-3 justify-items-center gap-y-10">
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </div>
      </HomeLayout>
    </>
  );
}
