import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Popup from "reactjs-popup";

export default function FacultyCard(name,description,department) {
  return (
    <Popup
      trigger={
        <div className="faculty-card relative cursor-pointer rounded-xl ">
          <Image
            src={
              "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
            }
            alt={"Sir the greate"}
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
            <Image
              src={
                "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
              }
              alt={"Sir the greate"}
              height={300}
              width={300}
              className="rounded-t-xl"
            />
            <div className="text overflow-hidden">
              <h1 className=" name font-bold text-orange text-2xl">
                {name}
              </h1>
              <p className="subject font-normal text-xm text-orange my-3">
               {department}
              </p>
              <p className="subject font-normal text-xm ">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
}
