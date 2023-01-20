import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import logo from "../public/src/assets/sifal-logo-footer.svg";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="relative w-full bottom-0">
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <footer className="bg-orange flex md:flex-row flex-col  justify-around py-10 md:h-[21em] h-auto">
        <div className="left">
          <Link href="/">
            <Image src={logo} className="mb-5" />
          </Link>
          <p className="text-offWhite text-xl mb-3">Sifal, Kathmandu, Nepal</p>
          <p className="text-offWhite text-xl mb-3">
            contact@sifal.deerwalk.edu.np
          </p>
          <p className="text-offWhite text-xl">014591240 | 9851064445</p>
        </div>
        <div className="vertical-bar h-[16em] border-l-[1px] border-offWhite"></div>
        <div className="links">
          <div className="links-flex-container flex justify-between w-[50em] mb-10">
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
          <div className="other-links flex justify-between w-[50em]">
            <Link
              href="dss-clubs"
              className="mb-3 text-offWhite text-xl font-medium"
            >
              DSS Clubs
            </Link>
            <Link
              href="admission"
              className="mb-3 text-offWhite text-xl font-medium"
            >
              Admission
            </Link>
            <a href="#" className="mb-3 text-offWhite text-xl font-medium">
              Contact Us
            </a>
            <a href="#" className="mb-3 text-offWhite text-xl font-medium">
              View Result
            </a>
          </div>
        </div>
        <div className="socials text-offWhite flex flex-col items-center gap-8 lg:text-3xl text-2xl lg:pb-8">
          <a
            href="https://www.facebook.com/DeerwalkSifalSchool"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
          {/* <a href="" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill />
              </a> */}
          <a
            href="https://www.linkedin.com/company/deerwalksifalschool/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="lg:text-4xl text-xl" />
          </a>
          <a
            href="https://www.youtube.com/@sifalschool/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube className="lg:text-4xl text-xl" />
          </a>
          {/* <a href="" target="_blank" rel="noopener noreferrer"> 
                <BsTwitter />
              </a> */}
        </div>
      </footer>
    </div>
  );
}
