import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import SchoolInMediaCard from "../components/schoolInMediaCard";
import HeroSectionCard from "../components/HeroSection";

export default function SchoolInMedia() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSectionCard url="" title="School in Media" />
        <div className="w-11/12 grid grid-cols-3 justify-items-center p-3 m-3 gap-10  ">
          <a
            href="https://www.hamropatro.com/posts/articles-Bal-saahitya/articles-Bal-saahitya-Wrinkle-in-time"
            className="row-span-2 hover:cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SchoolInMediaCard />
          </a>
          <SchoolInMediaCard />
          <SchoolInMediaCard />
          <SchoolInMediaCard />
          <SchoolInMediaCard />
        </div>
      </HomeLayout>
    </>
  );
}
