import { RxCross1 } from "react-icons/rx";
import routes from "../routes";

export default function Home(props) {
  const { isOverlayOpen } = props;
  const aboutUs = routes[0].aboutUs.map((about) => {
    return (
      console.log("links")
    )
  });
  return (
    <>
      <div
        className={`bg-orange z-50 w-full h-[24rem] absolute top-0 left-0 scroll-y-none ${
          isOverlayOpen ? "bottom-0" : "-top-[100vw]"
        }`}
        style={{ transition: ".1s all ease-in-out" }}
      >
        <div className="p-2 text-3xl text-offWhite absolute top-5 right-10 cursor-pointer">
          <RxCross1
            onClick={() => {
              props.onClick();
            }}
          /></div>

      </div>
    </>
  );
}
