import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroStudent from "../public/src/assets/hero-students.svg";
import heroTeacher from "../public/src/assets/hero-teachers.svg";
import perClass from "../public/src/assets/per-class.svg";
import stRatio from "../public/src/assets/st-ratio.svg";
import SchoolActivities from "../components/SchoolActivities";

export default function Home() {
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
            <h1 className="text-[4rem] font-extrabold w-[14em] leading-[1.25em]">
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
                className="text-center text-offWhite border-4 border-orange font-bold bg-orange px-5 py-2 rounded-xl hover:text-orange hover:bg-transparent"
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
            <div
              className="absolute bottom-0 right-[14em] h-[15em] w-[15em] rounded-full bg-red-500"
              style={{
                backgroundImage:
                  "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="absolute top-0 right-0 h-[30em] w-[30em] rounded-full bg-red-400"
              style={{
                backgroundImage:
                  "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="absolute top-[10em] left-0 h-[15em] w-[15em] rounded-full bg-red-300"
              style={{
                backgroundImage:
                  "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                backgroundSize: "cover",
              }}
            ></div>
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
            <div className="individual-programs flex justify-between gap-x-10">
              <div className="elementary w-1/3">
                <div
                  className="elementary-image w-full h-[28em] bg-red-500 rounded-3xl mb-4"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-center text-orange text-3xl font-bold">
                  Elementary School
                </p>
              </div>
              <div className="middle w-1/3">
                <div
                  className="middle-image w-full h-[28em] bg-red-500 rounded-3xl mb-4"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="text-center text-orange text-3xl font-bold">
                  Middle School
                </p>
              </div>
              <div className="high w-1/3">
                <div
                  className="high-image w-full h-[28em] bg-red-500 rounded-3xl mb-4"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                ></div>
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
            <div className="grid-container mb-8">
              <Link href="/" className="row-span-2 hover:cursor-pointer">
                <div
                  className="first-card bg-red-500 h-full rounded-3xl relative row-span-2 -z-50"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="news-overlay h-full rounded-3xl bg-gradient-to-t from-black to-transparent">
                    <p className="absolute top-5 left-5 bg-orange w-[4rem] h-[4rem] flex justify-center items-center text-offWhite text-center rounded-full font-bold">
                      16 Dec
                    </p>
                    <p className="absolute bottom-5 left-5 w-[17em] font-bold text-offWhite text-2xl">
                      Deerwalk Sifal Night | Elementary School
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/" className="col-span-2 hover:cursor-pointer">
                <div
                  className="second-card bg-red-500 h-full rounded-3xl relative -z-50"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="news-overlay h-full rounded-3xl bg-gradient-to-t from-black to-transparent">
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
                <div
                  className="third-card bg-red-500 h-full rounded-3xl relative -z-50"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="news-overlay h-full rounded-3xl bg-gradient-to-t from-black to-transparent">
                    <p className="absolute top-5 left-5 bg-orange w-[4rem] h-[4rem] flex justify-center items-center text-offWhite text-center rounded-full font-bold">
                      16 Dec
                    </p>
                    <p className="absolute bottom-5 left-5 w-[17em] font-bold text-offWhite text-2xl">
                      Deerwalk Sifal Night | Elementary School
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/" className="hover:cursor-pointer">
                <div
                  className="fourth-card bg-red-500 h-full rounded-3xl relative -z-50"
                  style={{
                    backgroundImage:
                      "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="news-overlay h-full rounded-3xl bg-gradient-to-t from-black to-transparent">
                    <p className="absolute top-5 left-5 bg-orange w-[4rem] h-[4rem] flex justify-center items-center text-offWhite text-center rounded-full font-bold">
                      16 Dec
                    </p>
                    <p className="absolute bottom-5 left-5 w-[17em] font-bold text-offWhite text-2xl">
                      Deerwalk Sifal Night | Elementary School
                    </p>
                  </div>
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
        <SchoolActivities />
        <div className="school-in-media mt-2">
          <div className="school-in-media-content w-11/12 mx-auto py-8">
            <h1 className="text-4xl font-bold mb-6">School in Media</h1>
            <div className="grid-container mb-8">
              <a
                href="https://www.hamropatro.com/posts/articles-Bal-saahitya/articles-Bal-saahitya-Wrinkle-in-time"
                className="row-span-2 hover:cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="first-card bg-orange h-full relative row-span-2 -z-50">
                  <iframe
                    src="https://www.hamropatro.com/posts/articles-Bal-saahitya/articles-Bal-saahitya-Wrinkle-in-time"
                    frameborder="0"
                    className="w-full h-full"
                  ></iframe>
                  <div className="overlay w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent">
                    <div className="news-content absolute top-0 left-0 h-full">
                      <p className="absolute bottom-[3em] left-5 w-[17em] text-offWhite text-2xl font-bold">
                        LIFE STORY
                      </p>
                      <p className="absolute bottom-5 left-5 w-[17em] text-offWhite">
                        -Snigdha Chaudhary
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://www.hamropatro.com/posts/articles-Bal-saahitya/articles-Bal-saahitya-Wrinkle-in-time"
                className="hover:cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="first-card bg-orange h-full relative -z-50">
                  <iframe
                    src="https://www.hamropatro.com/posts/articles-Bal-saahitya/articles-Bal-saahitya-Wrinkle-in-time"
                    frameborder="0"
                    className="w-full h-full"
                  ></iframe>
                  <div className="overlay w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent">
                    <div className="news-content absolute top-0 left-0 h-full">
                      <p className="absolute bottom-[3em] left-5 w-[17em] text-offWhite text-2xl font-bold">
                        LIFE STORY
                      </p>
                      <p className="absolute bottom-5 left-5 w-[17em] text-offWhite">
                        -Snigdha Chaudhary
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://www.hamropatro.com/posts/articles-Bal-saahitya/articles-Bal-saahitya-Wrinkle-in-time"
                className="hover:cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="first-card bg-orange h-full relative -z-50">
                  <iframe
                    src="https://www.hamropatro.com/posts/articles-Bal-saahitya/articles-Bal-saahitya-Wrinkle-in-time"
                    frameborder="0"
                    className="w-full h-full"
                  ></iframe>
                  <div className="overlay w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent">
                    <div className="news-content absolute top-0 left-0 h-full">
                      <p className="absolute bottom-[3em] left-5 w-[17em] text-offWhite text-2xl font-bold">
                        LIFE STORY
                      </p>
                      <p className="absolute bottom-5 left-5 w-[17em] text-offWhite">
                        -Snigdha Chaudhary
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://www.hamropatro.com/posts/articles-Bal-saahitya/articles-Bal-saahitya-Wrinkle-in-time"
                className="hover:cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="first-card bg-orange h-full relative -z-50">
                  <iframe
                    src="https://www.hamropatro.com/posts/articles-Bal-saahitya/articles-Bal-saahitya-Wrinkle-in-time"
                    frameborder="0"
                    className="w-full h-full"
                  ></iframe>
                  <div className="overlay w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent">
                    <div className="news-content absolute top-0 left-0 h-full">
                      <p className="absolute bottom-[3em] left-5 w-[17em] text-offWhite text-2xl font-bold">
                        LIFE STORY
                      </p>
                      <p className="absolute bottom-5 left-5 w-[17em] text-offWhite">
                        -Snigdha Chaudhary
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://www.hamropatro.com/posts/articles-Bal-saahitya/articles-Bal-saahitya-Wrinkle-in-time"
                className="hover:cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="first-card bg-orange h-full relative -z-50">
                  <iframe
                    src="https://www.hamropatro.com/posts/articles-Bal-saahitya/articles-Bal-saahitya-Wrinkle-in-time"
                    frameborder="0"
                    className="w-full h-full"
                  ></iframe>
                  <div className="overlay w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent">
                    <div className="news-content absolute top-0 left-0 h-full">
                      <p className="absolute bottom-[3em] left-5 w-[17em] text-offWhite text-2xl font-bold">
                        LIFE STORY
                      </p>
                      <p className="absolute bottom-5 left-5 w-[17em] text-offWhite">
                        -Snigdha Chaudhary
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="view-more text-center">
              <Link
                href="/school-in-media"
                className="text-center text-offWhite border-4 border-orange font-bold bg-orange px-5 py-2 rounded-xl hover:text-orange hover:bg-transparent"
              >
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
        <div
          className="admissions mt-2 bg-gray h-[22em]"
          style={{
            backgroundImage:
              "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="admission-overlay h-full flex bg-gradient-to-r from-orange via-orange to-transparent">
            <div className="admissions-container w-11/12 mx-auto flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4 text-offWhite">
                Admissions
              </h1>
              <p className="w-[55em] text-2xl mb-12 text-offWhite">
                Want to learn more about the process of admission? Go through
                the process right now.
              </p>
              <div className="learn-more">
                <Link
                  href="/admission"
                  className="text-xl text-offWhite font-bold border-4 rounded-xl border-offWhite px-5 py-2 hover:bg-offWhite hover:text-orange"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-embeds mt-2">
          <div className="embeds-container w-full h-[28em] mx-auto flex gap-10 py-8">
            <div className="social-embed w-4/12">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDeerwalkSifalSchool%2F&tabs=timeline&width=600&height=395&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                frameborder="0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="map-embed w-8/12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4825.106696257752!2d85.33801992470663!3d27.711577560114517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1976cd253e73%3A0x6a487c1532b2fca7!2sDeerwalk%20Sifal%20School!5e0!3m2!1sen!2snp!4v1674705609368!5m2!1sen!2snp"
                frameborder="0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
