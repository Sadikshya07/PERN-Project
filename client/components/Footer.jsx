import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import logo from "../public/src/assets/sifal-logo-footer.svg";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="relative w-full bottom-0">
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="footer-wrapper bg-orange w-full py-6">
        <footer className="w-11/12 mx-auto flex lg:flex-row md:gap-x-10 flex-col justify-around  lg:h-[21em] h-auto">
          <div className="left mb-8">
            <Link href="/">
              <Image src={logo} className="mb-5" />
            </Link>
            <p className="text-offWhite text-xl mb-3">Sifal, Kathmandu, Nepal</p>
            <p className="text-offWhite text-xl mb-3">
              contact@sifal.deerwalk.edu.np
            </p>
            <p className="text-offWhite text-xl">014591240 | 9851064445</p>
          </div>
          <div className="vertical-bar hidden lg:block h-[20em] border-l-[1px] border-offWhite"></div>
          <div className="links"> 
            <div className="grid grid-cols-2 grid-rows-2 lg:links-flex-container lg:flex justify-between w-full lg:w-[50em] mb-10">
              <div className="about-us flex flex-col">
                <h2 className="mb-3 text-offWhite text-xl font-medium">
                  About us
                </h2>
                <Link
                  href="/management"
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Management
                </Link>
                <Link
                  href="/faculty"
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Faculty
                </Link>
                <Link
                  href="/why-dss"
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Why DSS
                </Link>
              </div>
              <div className="programs  flex flex-col">
                <h2 className="mb-3 text-offWhite text-xl font-medium">
                  Programs
                </h2>
                <Link
                  href="/dss-courses"
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  DSS Courses
                </Link>
                <Link
                  href="/weekend-camp-program"
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Weekend Camp Program
                </Link>
                <Link
                  href="/courses"
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
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
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Newsletter
                </Link>
                <Link
                  href="/term-summary"
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Term Summary
                </Link>
                <Link
                  href="/the-deerwalker"
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  The Deerwalker
                </Link>
                <Link
                  href="/student-corner"
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Student Corner
                </Link>
                <Link
                  href="/analysis-report"
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Analysis Report
                </Link>
                <Link
                  href="/podcast"
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
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
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Alumni
                </Link>
                <Link
                  href="/news-and-events"
                  className="mb-2 text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  News & Events
                </Link>
              </div>
            </div>
            <div className="other-links grid grid-rows-1 grid-cols-2 justify-between w-full md:w-[50em]">
              <Link
                href="dss-clubs"
                className="mb-3 text-offWhite text-xl font-medium hover:text-darkGray"
              >
                DSS Clubs
              </Link>
              <Link
                href="admission"
                className="mb-3 text-offWhite text-xl font-medium hover:text-darkGray"
              >
                Admission
              </Link>
            </div>
          </div>
          <div className="socials mx-auto text-offWhite flex lg:flex-col items-center gap-8 text-3xl lg:pb-8">
            <a
              href="https://www.facebook.com/DeerwalkSifalSchool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook className="hover:text-darkGray"/>
            </a>
            <a
              href="https://www.linkedin.com/company/deerwalksifalschool/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-3xl hover:text-darkGray" />
            </a>
            <a
              href="https://www.youtube.com/@sifalschool/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube className="text-4xl hover:text-darkGray" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
