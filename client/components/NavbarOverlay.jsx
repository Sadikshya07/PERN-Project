import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import ContactUsPopup from "./ContactUsPopup";

export default function Home(props) {
  const { isOverlayOpen } = props;
  const year = new Date().getFullYear();

  return (
    <>
      <div
        className={`bg-orange z-50 w-full h-[26rem] absolute top-0 left-0 scroll-y-none ${
          isOverlayOpen ? "top-0" : "-top-[100vh]"
        }`}
        style={{ transition: "  .8s all ease-in-out" }}
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
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Management
                </Link>
                <Link
                  href="/faculty"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Faculty
                </Link>
                <Link
                  href="/why-dss"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
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
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  DSS Courses
                </Link>
                <Link
                  href="/weekend-camp-program"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Weekend Camp Program
                </Link>
                <Link
                  href="/courses"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Courses
                </Link>
              </div>
              <div className="community flex flex-col">
                <h2 className="mb-3 text-offWhite text-xl font-medium">
                  Community
                </h2>
                <Link href="/" className="text-offWhite font-regular font-sm hover:text-darkGray">
                  Alumni
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
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
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Newsletter
                </Link>
                <Link
                  href="/term-summary"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Term Summary
                </Link>
                <Link
                  href="/the-deerwalker"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  The Deerwalker
                </Link>
                <Link
                  href="/student-corner"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Student Corner
                </Link>
                <Link
                  href="/analysis-report"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Analysis Report
                </Link>
                <Link
                  href="/podcast"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Podcast
                </Link>
              </div>
              <div className="dss-in-year hidden flex-col">
                <h2 className="mb-3 text-offWhite text-xl font-medium">
                  DSS in {year}
                </h2>
                <Link
                  href="/alumni"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Lesson Plan (I-IV)
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Lesson Plan (V-VIII)
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Lesson Plan (IX-X)
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Lesson Plan (XI-XII)
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Calendar
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm hover:text-darkGray"
                >
                  Booklist
                </Link>
              </div>
            </div>
          </div>
          <div className="vertical-bar h-[22em] border-l-[1px] border-offWhite"></div>
          <div className="navbar-right w-5/12 flex flex-col lg:justify-between justify-start items-start ml-10">
            <div className="nav-links-right flex flex-col items-start gap-5  h-auto">
              <Link
                href="/dss-clubs"
                className="mb-3 text-offWhite text-xl font-medium hover:text-darkGray"
              >
                DSS Clubs
              </Link>
              <Link
                href="/admission"
                className="mb-3 text-offWhite text-xl font-medium hover:text-darkGray"
              >
                Admission
              </Link>
              <ContactUsPopup className=" hover:text-darkGray"/>
              <a href="#" className="mb-3 text-offWhite text-xl font-medium hover:text-darkGray">
                View Result
              </a>
            </div>
            <div className="socials text-offWhite flex items-center gap-8 lg:text-4xl text-2xl   lg:pb-8">
              <a
                href="https://www.facebook.com/DeerwalkSifalSchool"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-darkGray"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/deerwalksifalschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-darkGray"
              >
                <BsLinkedin className="lg:text-4xl text-xl" />
              </a>
              <a
                href="https://www.youtube.com/@sifalschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-darkGray"
              >
                <BsYoutube className="lg:text-4xl text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
