import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import {BsFacebook} from "react-icons/bs"
import {RiInstagramFill} from "react-icons/ri"
import {BsLinkedin} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

export default function Home(props) {
  const { isOverlayOpen } = props;
  const year = new Date().getFullYear();

  return (
    <>
      <div
        className={`bg-orange z-50 w-full h-[26rem] absolute top-0 left-0 scroll-y-none ${
          isOverlayOpen ? "top-0" : "-top-[100vh]"
        }`}
        style={{ transition: ".8s all ease-in-out" }}
      >
        <div className="p-2 text-3xl text-offWhite absolute top-5 right-10 cursor-pointer">
          <RxCross1
            onClick={() => {
              props.onClick();
            }}
          />
        </div>
        <div className="navbar-content p-8 lg:pl-14 sm:w-full sm:flex  hidden">
          <div className="navbar-left w-7/12 h-[22em]">
            <div className="navbar-grid-container">
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
              <div className="dss-in-year flex flex-col">
                <h2 className="mb-3 text-offWhite text-xl font-medium">
                  DSS in {year}
                </h2>
                <Link
                  href="/alumni"
                  className="text-offWhite font-regular font-sm"
                >
                  Lesson Plan (I-IV)
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm"
                >
                  Lesson Plan (V-VIII)
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm"
                >
                  Lesson Plan (IX-X)
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm"
                >
                  Lesson Plan (XI-XII)
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm"
                >
                  Calendar
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm"
                >
                  Booklist
                </Link>
              </div>
            </div>
            {/* <div className="nav-top flex justify-between mb-10"></div>
            <div className="nav-bottom flex justify-between"></div> */}
          </div>
          <div className="vertical-bar h-[22em] border-l-[1px] border-offWhite"></div>
          <div className="navbar-right w-5/12 flex flex-col lg:justify-between justify-start items-start ml-10">
            <div className="nav-links-right flex flex-col items-start gap-5  h-auto">
              <Link href = "dss-clubs" className="mb-3 text-offWhite text-xl font-medium">DSS Clubs</Link>
              <Link href = "admission" className="mb-3 text-offWhite text-xl font-medium">Admission</Link>
              <a href = "#" className="mb-3 text-offWhite text-xl font-medium">Contact Us</a>
              <a href = "#" className="mb-3 text-offWhite text-xl font-medium">View Result</a>
            </div>
            <div className="socials text-offWhite flex items-center gap-8 lg:text-3xl text-2xl   lg:pb-8">
              <BsFacebook />
              <RiInstagramFill/>
              <BsLinkedin className="lg:text-2xl text-xl"/>
              <BsYoutube/>
              <BsTwitter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
