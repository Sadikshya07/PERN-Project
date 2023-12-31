import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";
import { useEffect, useState } from "react";
import HeroSectionFinder from "./api/HeroSectionFinder";

export default function WeekendCampProgram() {
  const [heroImage, setHeroImage] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HeroSectionFinder.get("/Weekend Camp Program");
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
        <div className="content-wrapper w-11/12 mx-auto">
          <h1 className="md:text-center md:text-xl my-10 font-semibold">
            The Weekend Camp Program offers a variety of exciting activities for
            kids to enjoy, including 'ARTS', 'CODING', 'CONVERSATIONAL ENGLISH',
            'DANCE', and 'MUSIC'. These activities are designed to help children
            develop new skills and interests, while also having fun and making
            new friends.
          </h1>
          <div className="sections flex flex-col gap-10 mb-10">
            <div className="arts flex flex-col md:flex-row justify-between items-center">
              <div className="text md:w-8/12">
                <h3 className="text-3xl font-bold mb-8">Arts</h3>
                <p className="w-full lg:w-10/12 md:text-xl font-regular">
                  Through arts, students develop various skills like resilience,
                  courage, resolve and a positive mindset to help them master
                  their craft, do well academically and succeed in life after
                  high school.
                </p>
              </div>
              <div
                className="section-image w-[16rem] h-[16rem] md:w-[18rem] md:h-[18em] lg:w-[22rem] lg:h-[22em] rounded-full bg-orange"
                style={{
                  backgroundImage:
                    "url(https://deerwalk.edu.np/sifalschool/public/images/Background_Images/contactusBackgound.JPG)",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="coding flex flex-col md:flex-row-reverse justify-between items-center">
              <div className="text md:w-8/12">
                <h3 className="text-3xl font-bold mb-8">Coding</h3>
                <p className="w-full lg:w-10/12 md:text-xl font-regular">
                  Programmers (coders) are in high demand. Having children learn
                  to code at a young age prepares them for the future. Coding
                  knowledge helps the kids understand better problem-solving
                  techniques. Coding is fun and satisfying. This is why
                  childhood is the perfect age to start coding. With the
                  experience of running the largest software company (based on
                  the number of employees), and the premier Computer Science and
                  Information Technology college in Nepal, Deerwalk and its
                  sister institution, Sifal School is the perfect place for any
                  child to learn coding.
                </p>
              </div>
              <div
                className="section-image w-[16rem] h-[16rem] md:w-[18rem] md:h-[18em] lg:w-[22rem] lg:h-[22em] rounded-full bg-orange"
                style={{
                  backgroundImage:
                    "url(https://deerwalk.edu.np/sifalschool/public/images/Background_Images/admissionBackgound.JPG)",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="conversational-english flex flex-col md:flex-row justify-between items-center">
              <div className="text md:w-8/12">
                <h3 className="text-3xl font-bold mb-8">
                  Conversational English
                </h3>
                <p className="w-full lg:w-10/12 md:text-xl font-regular">
                  This is online learning, where the American teacher from the
                  USA teaches the student of age group 6 - 9 years in the
                  Language Lab of Sifal School virtually. At the same, there
                  will be a local English teacher to assist the class.
                </p>
              </div>
              <div
                className="section-image w-[16rem] h-[16rem] md:w-[18rem] md:h-[18em] lg:w-[22rem] lg:h-[22em] rounded-full bg-orange"
                style={{
                  backgroundImage:
                    "url(https://deerwalk.edu.np/sifalschool/public/images/Background_Images/weekendBackground.JPG)",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="music flex flex-col md:flex-row-reverse justify-between items-center">
              <div className="text md:w-8/12">
                <h3 className="text-3xl font-bold mb-8">Music</h3>
                <p className="w-full lg:w-10/12 md:text-xl font-regular">
                  According to science, music can help us be better creative
                  thinkers. The researchers have validated the fact that music
                  education from an early age helps develop cognitive abilities,
                  better memory, and language development. Listening to happy
                  music promotes more divergent thinking - a key element of
                  creativity.
                </p>
              </div>
              <div
                className="section-image w-[16rem] h-[16rem] md:w-[18rem] md:h-[18em] lg:w-[22rem] lg:h-[22em] rounded-full bg-orange"
                style={{
                  backgroundImage:
                    "url(https://deerwalk.edu.np/sifalschool/public/images/Background_Images/admissionBackgound.JPG)",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="dance flex flex-col md:flex-row justify-between items-center">
              <div className="text md:w-8/12">
                <h3 className="text-3xl font-bold mb-8">Dance</h3>
                <p className="w-full lg:w-10/12 md:text-xl font-regular">
                  This helps in improving social skills, wellbeing, reduction of
                  stress/ anxiety and the development of creativity and
                  self-expression. Dance is a medium for sensing, understanding,
                  and communicating ideas, feelings, and experiences.
                </p>
              </div>
              <div
                className="section-image w-[16rem] h-[16rem] md:w-[18rem] md:h-[18em] lg:w-[22rem] lg:h-[22em] rounded-full bg-orange"
                style={{
                  backgroundImage:
                    "url(https://deerwalk.edu.np/sifalschool/public/images/Background_Images/contactusBackgound.JPG)",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
