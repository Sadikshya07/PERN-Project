import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";

export default function WhyDSS() {
  return (
    <div>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSectionCard url="" title="Why DSS?" />
        <div className="why-dss-content w-11/12 mx-auto">
          <div className="sections">
            <div className="academic-fundamentals flex flex-col lg:flex-row justify-around items-center my-8">
              <div className="images relative w-5/12 h-[16rem] md:h-[28rem]">
                <div
                  className="image-one absolute right-0 bottom-0 w-[16rem] h-[16rem] md:w-[24rem] md:h-[24rem] rounded-full bg-red-500"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="image-two hidden lg:block absolute w-[24rem] h-[24rem] rounded-full bg-red-400"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div className="info w-10/12 lg:w-6/12">
                <h1 className="text-2xl md:text-3xl font-bold text-orange">
                  Academic Fundamentals
                </h1>
                <ul className="why-dss-list orange-disc list-disc">
                  <li>Handwriting</li>
                  <li>Class Work</li>
                  <li>Home Work</li>
                  <li>Project</li>
                  <li>Zero Tolerance to Plagiarism</li>
                </ul>
              </div>
            </div>
            <div className="essential-skills flex flex-col lg:flex-row-reverse justify-around items-center my-8">
              <div className="images relative w-5/12 h-[16rem] md:h-[28rem]">
                <div
                  className="image-one absolute right-0 bottom-0 w-[16rem] h-[16rem] md:w-[24rem] md:h-[24rem] rounded-full bg-red-500"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="image-two hidden lg:block absoltue w-[24rem] h-[24rem] rounded-full bg-red-400"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div className="info w-10/12 lg:w-6/12">
                <h1 className="text-2xl font-bold text-orange">
                  Essential Skills
                </h1>
                <ul className="why-dss-list orange-disc list-disc grid grid-cols-1 md:grid-cols-2">
                  <li>Listen Carefully</li>
                  <li>Respect Everyone (5R’s of DSS)</li>
                  <li>Dress Smartly</li>
                  <li>Green Environment</li>
                  <li>Zero Tolerance to Bullying</li>
                  <li>
                    Zero Tolerance to the use of <br /> sexist language
                  </li>
                  <li>Zero Tolerance to Lying</li>
                  <li>Zero Tolerance to Bribery</li>
                </ul>
              </div>
            </div>
            <div className="language-skills flex flex-col lg:flex-row justify-around items-center my-8">
              <div className="images relative w-5/12 h-[16rem] md:h-[28rem]">
                <div
                  className="image-one absolute right-0 bottom-0 w-[16rem] h-[16rem] md:w-[24rem] md:h-[24rem] rounded-full bg-red-500"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="image-two hidden lg:block  absoltue w-[24rem] h-[24rem] rounded-full bg-red-400"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div className="info w-10/12 lg:w-6/12">
                <h1 className="text-2xl font-bold text-orange">
                  Language Skills
                </h1>
                <ul className="why-dss-list orange-disc list-disc">
                  <li>
                    <p>Reading</p>
                    <p className="font-medium">
                      Our students read one Nepali and one English fiction books
                      every month.
                    </p>
                  </li>
                  <li>
                    <p>Writing</p>
                    <p className="font-medium">
                      Our students do lots of comprehensive writings. Such
                      writings are published in the Students Corner section and
                      the quarterly published magazine, 'The Deerwalker'.
                    </p>
                  </li>
                  <li>
                    <p>Articulation</p>
                    <p className="font-medium">
                      Our students present the ideas through both speaking and
                      writing.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="eca flex flex-col lg:flex-row-reverse justify-around items-center my-8">
              <div className="images relative w-5/12 h-[16rem] md:h-[28rem]">
                <div
                  className="image-one absolute right-0 bottom-0 w-[16rem] h-[16rem] md:w-[24rem] md:h-[24rem] rounded-full bg-red-500"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="image-two hidden lg:block absolute w-[24rem] h-[24rem] rounded-full bg-red-400"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div className="info w-10/12 lg:w-6/12">
                <h1 className="text-2xl font-bold text-orange">
                  Language Skills
                </h1>
                <ul className="why-dss-list orange-disc list-disc grid grid-cols-1 md:grid-cols-2">
                  <li>Dance</li>
                  <li>Music</li>
                  <li>Vocal</li>
                  <li>Visual Arts</li>
                  <li>Yog & Meditation</li>
                  <li>Taekwondo ITF</li>
                  <li>Basketball</li>
                  <li>Athletics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </div>
  );
}
