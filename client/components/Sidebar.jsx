import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

export default function Home(props) {
  const { isSidebarOpen } = props;
  return (
    <>
      <div
        className={`bg-orange z-50 w-screen h-screen fixed top-0 left-0 overflow-y-scroll ${
          isSidebarOpen ? "left-0" : "left-[100vw]"
        }`}
        style={{ transition: ".1s all ease-in-out" }}
      >
        <div className="main-container">
          <div className="p-2 text-offWhite text-3xl absolute top-5 right-10">
            <RxCross1
              onClick={() => {
                props.onClick();
              }}
            />
          </div>
          <div className="links-container relative top-[100px] left-[40px]">
            <div className="about-us flex flex-col mb-8">
              <h2 className="mb-3 text-offWhite text-2xl font-medium">
                About us
              </h2>
              <div className="links flex flex-col relative text-lg left-[20px]">
                <Link
                  href="/management"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Management
                </Link>
                <Link
                  href="/faculty"
                  className="text-offWhite font-regular font-sm mb-1"
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
            </div>
            <div className="programs flex flex-col mb-8">
              <h2 className="mb-3 text-offWhite text-2xl font-medium">
                Programs
              </h2>
              <div className="links flex flex-col relative text-lg left-[20px]">
                <Link
                  href="/dss-courses"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  DSS Courses
                </Link>
                <Link
                  href="/weekend-camp-program"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Weekend Camp Program
                </Link>
                <Link
                  href="/courses"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Courses
                </Link>
              </div>
            </div>
            <div className="publications flex flex-col mb-8">
              <h2 className="mb-3 text-offWhite text-xl font-medium">
                Publications
              </h2>
              <div className="links flex flex-col relative text-lg left-[20px]">
                <Link
                  href="/newsletter"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Newsletter
                </Link>
                <Link
                  href="/term-summary"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Term Summary
                </Link>
                <Link
                  href="/the-deerwalker"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  The Deerwalker
                </Link>
                <Link
                  href="/student-corner"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Student Corner
                </Link>
                <Link
                  href="/analysis-report"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Analysis Report
                </Link>
                <Link
                  href="/podcast"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Podcast
                </Link>
              </div>
            </div>
            <div className="community flex flex-col mb-8">
              <h2 className="mb-3 text-offWhite text-xl font-medium">
                Community
              </h2>
              <div className="links flex flex-col relative text-lg left-[20px]">
                <Link
                  href="/"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Alumni
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  News & Events
                </Link>
              </div>
            </div>
            {/* <div className="dss-in-year flex flex-col">
              <h2 className="mb-3 text-offWhite text-xl font-medium">
                DSS in {year}
              </h2>
              <div className="links flex flex-col relative text-lg left-[20px]">
                <Link
                  href="/alumni"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Lesson Plan (I-IV)
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Lesson Plan (V-VIII)
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Lesson Plan (IX-X)
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Lesson Plan (XI-XII)
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Calendar
                </Link>
                <Link
                  href="/news-and-events"
                  className="text-offWhite font-regular font-sm mb-1"
                >
                  Booklist
                </Link>
              </div>
            </div> */}
            <div className="other-links flex flex-col mb-8">
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
        </div>
      </div>
    </>
  );
}
