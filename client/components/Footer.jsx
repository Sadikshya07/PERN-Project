import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import logo from "../public/src/assets/sifal-logo-footer.svg";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <footer className="bg-orange">
        <div className="left">
          <Image src={logo} />
          <p>Sifal, Kathmandu, Nepal</p>
          <p>contact@sifal.deerwalk.edu.np</p>
          <p>014591240 | 9851064445</p>
        </div>
        <div className="links">
          <div className="links-grid-container">
            <div className="about-us flex flex-col">
              <h2 className="mb-3 text-offWhite text-xl font-medium">
                About us
              </h2>
              <Link
                href="/management"
                className="text-offWhite font-regular font-sm"
              >
                Management
              </Link>
              <Link
                href="/faculty"
                className="text-offWhite font-regular font-sm"
              >
                Faculty
              </Link>
              <Link
                href="/why-dss"
                className="text-offWhite font-regular font-sm"
              >
                Why DSS
              </Link>
            </div>
            <div className="programs flex flex-col">
              <h2 className="mb-3 text-offWhite text-xl font-medium">
                Programs
              </h2>
              <Link
                href="/dss-courses"
                className="text-offWhite font-regular font-sm"
              >
                DSS Courses
              </Link>
              <Link
                href="/weekend-camp-program"
                className="text-offWhite font-regular font-sm"
              >
                Faculty
              </Link>
              <Link
                href="/courses"
                className="text-offWhite font-regular font-sm"
              >
                Courses
              </Link>
            </div>
            <div className="publications flex flex-col">
              <h2 className="mb-3 text-offWhite text-xl font-medium">
                Publications
              </h2>
              <Link
                href="/newsletter"
                className="text-offWhite font-regular font-sm"
              >
                Newsletter
              </Link>
              <Link
                href="/term-summary"
                className="text-offWhite font-regular font-sm"
              >
                Term Summary
              </Link>
              <Link
                href="/the-deerwalker"
                className="text-offWhite font-regular font-sm"
              >
                The Deerwalker
              </Link>
              <Link
                href="/student-corner"
                className="text-offWhite font-regular font-sm"
              >
                Student Corner
              </Link>
              <Link
                href="/analysis-report"
                className="text-offWhite font-regular font-sm"
              >
                Analysis Report
              </Link>
              <Link
                href="/podcast"
                className="text-offWhite font-regular font-sm"
              >
                Podcast
              </Link>
            </div>
            <div className="community flex flex-col">
              <h2 className="mb-3 text-offWhite text-xl font-medium">
                Community
              </h2>
              <Link
                href="/alumni"
                className="text-offWhite font-regular font-sm"
              >
                Alumni
              </Link>
              <Link
                href="/news-and-events"
                className="text-offWhite font-regular font-sm"
              >
                News & Events
              </Link>
            </div>
          </div>
          <div className="other-links flex items-start gap-5  h-auto">
              <Link href = "dss-clubs" className="mb-3 text-offWhite text-xl font-medium">DSS Clubs</Link>
              <Link href = "admission" className="mb-3 text-offWhite text-xl font-medium">Admission</Link>
              <a href = "#" className="mb-3 text-offWhite text-xl font-medium">Contact Us</a>
              <a href = "#" className="mb-3 text-offWhite text-xl font-medium">View Result</a>
            </div>
        </div>
        <div className="socials">
          <BsFacebook />
          <RiInstagramFill />
          <BsLinkedin />
          <BsYoutube />
          <BsTwitter />
        </div>
      </footer>
    </div>
  );
}
