import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";

export default function DSSClubs() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSectionCard url="" title="DSS Clubs" />
        <div className="dss-clubs-conten w-11/12 mx-auto">
          <h1 className="text-xl text-center font-semibold my-8">
            Through DSS clubs we create an environment where students from all
            ages, ethnicities and backgrounds come together to unite for a
            common pursuit.
          </h1>
          <div className="section-one flex justify-between mb-12">
            <div className="images relative w-5/12 h-[28rem]">
              <div
                className="image-one absolute right-0 bottom-0 w-[24rem] h-[24rem] rounded-full bg-red-500"
                style={{
                  backgroundImage:
                    "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="image-two absoltue w-[24rem] h-[24rem] rounded-full bg-red-400"
                style={{
                  backgroundImage:
                    "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="info-right w-6/12">
              <h2 className="text-3xl text-orange font-bold">
                Inclusive Clubs
              </h2>
              <ul className="dss-clubs-list orange-disc list-disc grid grid-cols-2">
                <li>DeerExpress and Debate Club</li>
                <li>Literature Club</li>
                <li>Deerwalk Sakuntal Kunja</li>
                <li>Media Club</li>
                <li>Deerwalk Sanskrit Samaj</li>
                <li>Sports Club</li>
                <li>Hiking Club</li>
                <li>The Deerwalker</li>
                <li>IT Club</li>
              </ul>
            </div>
          </div>
          <div className="section-two flex flex-row-reverse justify-between mb-10">
            <div className="images relative w-5/12 h-[28rem]">
              <div
                className="image-one absolute right-0 bottom-0 w-[24rem] h-[24rem] rounded-full bg-red-500"
                style={{
                  backgroundImage:
                    "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="image-two absoltue w-[24rem] h-[24rem] rounded-full bg-red-400"
                style={{
                  backgroundImage:
                    "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="info-right w-6/12">
              <h2 className="text-3xl text-orange font-bold">
                Exclusive Clubs
              </h2>
              <ul className="dss-clubs-list orange-disc list-disc grid grid-cols-2">
                <li>Art & Craft Club</li>
                <li>Taekwondo ITF club</li>
                <li>Basketball (Boys/ Girls)</li>
                <li>Theater</li>
                <li>Dance Club</li>
                <li>Vocal Club</li>
                <li>Music Club</li>
                <li>Yoga and Meditation Club</li>
              </ul>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
