import { RxCross1 } from "react-icons/rx";

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
        <div className="p-2 text-3xl text-offWhite absolute top-5 right-10">
          <RxCross1
            onClick={() => {
              props.onClick();
            }}
          />
        </div>
      </div>
    </>
  );
}
