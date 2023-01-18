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
        <div className="images">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="hero">
          <h1>Welcome to Sifal School</h1>
          <p className="heading-text">
            At DSS, all students are encouraged to take risks, speak up, embrace
            opportunities, and think creatively.We enable them to effect the
            change they desire.
          </p>
          <div className="hero-button">
            <Link href="/why-dss">READ MORE</Link>
          </div>
          <div className="metrics">
            <div className="students">
              <Image src={heroStudent} />
              <p>353</p>
              <p>Students</p>
            </div>
            <div className="per-class">
              <Image src={perClass} />
              <p>24</p>
              <p>Per Class</p>
            </div>
            <div className="teachers">
              <Image src={heroTeacher} />
              <p>60</p>
              <p>Teachers</p>
            </div>
            <div className="st-ratio">
              <Image src={stRatio} />
              <p>5:1</p>
              <p>Student Teacher Ratio</p>
            </div>
          </div>
        </div>
        <div className="programs">
          <div className="programs-content">
            <h1>Our Programs</h1>
            <p>
              Founded in 2016, Deerwalk Sifal School is determined to help our
              students grow as a good global citizen with solid academic skill
              in language, math, and science. We make sure we get the best out
              of every student and help each find their strength.
            </p>
            <div className="individual-programs">
              <div className="elementary">
                <div className="elementary-image"></div>
                <p>Elementary School</p>
              </div>
              <div className="middle">
                <div className="middle-image"></div>
                <p>Middle School</p>
              </div>
              <div className="high">
                <div className="high-image"></div>
                <p>High School</p>
              </div>
            </div>
          </div>
        </div>
        <div className="news-and-events">
          <h1>News and Events</h1>
          <div className="news-grid-container">
            <div className="first-card">
              <p>16 Dec</p>
              <p>Deerwalk Sifal Night | Elementary Schol</p>
            </div>
            <div className="second-card">
              <p>16 Dec</p>
              <p>Deerwalk Sifal Night | Elementary Schol</p>
            </div>
            <div className="third-card">
              <p>16 Dec</p>
              <p>Deerwalk Sifal Night | Elementary Schol</p>
            </div>
            <div className="fourth-card">
              <p>16 Dec</p>
              <p>Deerwalk Sifal Night | Elementary Schol</p>
            </div>
          </div>
          <div className="view-more">
            <Link href="/news-and-events">VIEW MORE</Link>
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
        <Footer />
      </main>
    </>
  );
}
