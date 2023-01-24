import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroStudent from "../public/src/assets/hero-students.svg";
import heroTeacher from "../public/src/assets/hero-teachers.svg";
import perClass from "../public/src/assets/per-class.svg";
import stRatio from "../public/src/assets/st-ratio.svg";

export default function Home() {
  function hello(){
    console.log("hello");
  }
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="hero-section flex justify-between w-11/12 mx-auto mt-8">
          <div className="left w-[38em]">
            <h1 className="text-[4rem] font-extrabold w-[400px] leading-[1.25em]">
              Welcome to Sifal School
            </h1>
            <p className="heading-text text-2xl w-[24em] font-regular mt-2">
              At DSS, all students are encouraged to take risks, speak up,
              embrace opportunities, and think creatively.We enable them to
              effect the change they desire.
            </p>
            <div className="hero-button mt-6">
              <Link
                href="/why-dss"
                className="text-center text-offWhite border-4 border-orange font-bold bg-orange px-5 py-2 rounded-full hover:text-orange hover:bg-transparent"
              >
                READ MORE
              </Link>
            </div>
            <div className="metrics w-[45em] grid grid-cols-2 gap-y-8 mt-6">
              <div className="students mt-4 w-[6em]">
                <Image src={heroStudent} className="ml-4" />
                <p className="text-center text-orange font-bold text-3xl mt-2">
                  353
                </p>
                <p className="text-center text-xl">Students</p>
              </div>
              <div className="per-class w-[6em]">
                <Image src={perClass} className="ml-4" />
                <p className="text-center text-orange font-bold text-3xl mt-2">
                  24
                </p>
                <p className="text-center text-xl">Per Class</p>
              </div>
              <div className="teachers w-[6em]">
                <Image src={heroTeacher} className="ml-4" />
                <p className="text-center text-orange font-bold text-3xl mt-2">
                  60
                </p>
                <p className="text-center text-xl">Teachers</p>
              </div>
              <div className="st-ratio w-[20em]">
                <Image src={stRatio} className="ml-4" />
                <p className="text-orange font-bold text-3xl ml-[1em] mt-2">
                  5:1
                </p>
                <p className="text-xl">Student Teacher Ratio</p>
              </div>
            </div>
          </div>
          <div className="images relative w-[38em] h-[38em] -z-50">
            <div className="absolute bottom-0 right-[14em] h-[15em] w-[15em] rounded-full bg-red-500"></div>
            <div className="absolute top-0 right-0 h-[30em] w-[30em] rounded-full bg-red-400"></div>
            <div className="absolute top-[10em] left-0 h-[15em] w-[15em] rounded-full bg-red-300"></div>
          </div>
        </div>
        <div className="programs mt-10 bg-gray">
          <div className="programs-content w-11/12 mx-auto py-8">
            <h1 className="text-4xl font-bold">Our Programs</h1>
            <p className="w-[64em] text-xl my-6">
              Founded in 2016, Deerwalk Sifal School is determined to help our
              students grow as a good global citizen with solid academic skill
              in language, math, and science. We make sure we get the best out
              of every student and help each find their strength.
            </p>
            <div className="individual-programs flex justify-between">
              <div className="elementary w-[24em]">
                <div className="elementary-image w-full h-[28em] bg-red-500 rounded-3xl mb-4"></div>
                <p className="text-center text-orange text-3xl font-bold">
                  Elementary School
                </p>
              </div>
              <div className="middle w-[24em]">
                <div className="middle-image w-full h-[28em] bg-red-500 rounded-3xl mb-4"></div>
                <p className="text-center text-orange text-3xl font-bold">
                  Middle School
                </p>
              </div>
              <div className="high w-[24em]">
                <div className="high-image w-full h-[28em] bg-red-500 rounded-3xl mb-4"></div>
                <p className="text-center text-orange text-3xl font-bold">
                  High School
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="news mt-2">
          <div className="news-and-events w-11/12 mx-auto py-8">
            <h1 className="text-4xl font-bold mb-6">News and Events</h1>
            <div className="news-grid-container mb-8">
              <Link href="/" className="row-span-2 hover:cursor-pointer">
                <div className="first-card bg-red-500 h-full rounded-3xl relative row-span-2 -z-50">
                  <div className="news-overlay">
                    <p className="absolute top-5 left-5 bg-orange w-[4rem] h-[4rem] flex justify-center items-center text-offWhite text-center rounded-full font-bold">
                      16 Dec
                    </p>
                    <p className="absolute bottom-5 left-5 w-[17em] font-bold text-offWhite text-2xl">
                      Deerwalk Sifal Night | Elementary School
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/" className= "col-span-2 hover:cursor-pointer">
                <div className="second-card bg-red-500 h-full rounded-3xl relative -z-50">
                  <div className="news-overlay">
                    <p className="absolute top-5 left-5 bg-orange w-[4rem] h-[4rem] flex justify-center items-center text-offWhite text-center rounded-full font-bold">
                      16 Dec
                    </p>
                    <p className="absolute bottom-5 left-5 w-[33em] font-bold text-offWhite text-2xl">
                      Deerwalk Sifal Night | Elementary School
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/" className="hover:cursor-pointer">
                <div className="third-card bg-red-500 h-full rounded-3xl relative -z-50">
                  <p className="absolute top-5 left-5 bg-orange w-[4rem] h-[4rem] flex justify-center items-center text-offWhite text-center rounded-full font-bold">
                    16 Dec
                  </p>
                  <p className="absolute bottom-5 left-5 w-[17em] font-bold text-offWhite text-2xl">
                    Deerwalk Sifal Night | Elementary School
                  </p>
                </div>
              </Link>
              <Link href="/" className="hover:cursor-pointer">
                <div className="fourth-card bg-red-500 h-full rounded-3xl relative -z-50">
                  <p className="absolute top-5 left-5 bg-orange w-[4rem] h-[4rem] flex justify-center items-center text-offWhite text-center rounded-full font-bold">
                    16 Dec
                  </p>
                  <p className="absolute bottom-5 left-5 w-[17em] font-bold text-offWhite text-2xl">
                    Deerwalk Sifal Night | Elementary School
                  </p>
                </div>
              </Link>
            </div>
            <div className="view-more text-center">
              <Link
                href="/news-and-events"
                className="text-center text-offWhite border-4 border-orange font-bold bg-orange px-5 py-2 rounded-xl hover:text-orange hover:bg-transparent"
              >
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="school-activities">
          <h1>School Activities</h1>
          <div className="embeds"></div>
        </div>
        <div className="school-in-media">
          <div className="media-grid-container"></div>
          <div className="view-more">
            <Link href="/news-and-events">VIEW MORE</Link>
          </div>
        </div>
        <div className="admissions">
          <div className="admissions-container">
            <h1>Admissions</h1>
            <p>
              Want to learn more about the process of admission? Go through the
              process right now.
            </p>
            <Link href="/admission">Learn More</Link>
          </div>
        </div>
        <div className="social-embed">FACEBOOK EMBED HERE</div>
        <div className="map-embed">MAP EMBED HERE</div>
      </main>
      <Footer />
    </>
  );
}
