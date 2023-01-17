import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

export default function Home(props) {
  const { isSidebarOpen } = props;
  return (
    <>
      <div
        className={`bg-orange z-50 w-full h-screen fixed top-0 left-0 scroll-y-none ${
          isSidebarOpen ? "left-0" : "left-[100vw]"
        }`}
        style={{ transition: ".1s all ease-in-out" }}
      >
        <div className="p-2 text-offWhite text-3xl absolute top-5 right-10">
          <RxCross1
            onClick={() => {
              props.onClick();
            }}
          />
        </div>
        <div className="main-container relative top-[100px] left-[40px]">
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
                Faculty
              </Link>
              <Link
                href="/courses"
                className="text-offWhite font-regular font-sm mb-1"
              >
                Courses
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
