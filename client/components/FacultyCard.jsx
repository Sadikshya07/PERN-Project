import Image from "next/image";
import Popup from "reactjs-popup";

export default function FacultyCard({name,description,department}) {
  return (
    <Popup
      trigger={
        <div className="faculty-card relative cursor-pointer rounded-xl">
          <Image
            src={
              "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
            }
            alt={"Sir the great"}
            height={364}
            width={384}
            className="rounded-t-xl"
          />
          <div className="overlay absolute flex items-end justify-start opacity-0 text-center bottom-0 rounded-xl h-0 w-full   bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.5)] text-orange text-xl ">
            <p className="text-center p-3 m-3 font-black text-2xl">{name}</p>
          </div>
        </div>
      }
      modal
    >
      {(close) => (
        <div className="popup-container flex flex-col rounded-xl">
          <button className="self-end px-5 pt-3 text-4xl" onClick={close}>
            &times;
          </button>
          <div className="content flex gap-5 !p-10 !pt-0">
            <div
              className="faculty-overlay-image w-[30em] 2xl:w-[30em] h-[22rem] rounded-xl"
              style={{
                backgroundImage:
                  "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
                backgroundSize: "cover",
                objectPosition: "center"
              }}
            ></div>
            <div className="text overflow-hidden">
              <h1 className=" name font-bold text-orange text-2xl">
                {name}
              </h1>
              <p className="subject font-normal text-lg text-orange my-3">
               {department}
              </p>
              <p className="subject mb-4 font-normal">
                {description}
              </p>
              <p className="mb-4">
                <span className="font-bold">Area of Expertise</span>: Python,
                English Language
              </p>
              <p className="">
                <span className="font-bold">Experience</span>: 10 years
              </p>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}
