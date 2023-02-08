import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";

export default function WHhyDSS() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSectionCard url="" title="Why DSS?" />
        <div className="why-dss-content">
          <div className="content-card flex">
            <div
              className="card-image w-4/12 h-[] top-2 rounded-xl"
              style={{
                backgroundImage:
                  "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="information p-[4em] w-[25em] rounded-xl bg-orange text-offWhite">
              <h1 className="text-3xl mb-8 font-bold">Academic Fundamentals</h1>
              <ul className="text-xl">
                <li>Handwriting</li>
                <li>Class Work</li>
                <li>Home Work</li>
                <li>Project</li>
                <li>Zero Tolerance to Plagiarism</li>
              </ul>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
