import Image from "next/image";
import { useState } from "react";
import Popup from "./Popup";

export default function FacultyCard({
  name,
  description,
  department,
  AreaofExpertise,
  Experience,
  image,
}) {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <div
        className="faculty-card relative cursor-pointer rounded-xl"
        onClick={(e) => setTrigger(true)}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_SERVER_HOST}${image}`}
          alt={"faculty image"}
          height={450}
          width={450}
          className="rounded-xl"
        />
        <div className="overlay absolute flex items-end justify-start opacity-0 text-center bottom-0 rounded-xl h-0 w-full bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.5)] text-orange text-xl ">
          <p className="text-center p-3 m-3 font-bold text-2xl">{name}</p>
        </div>
      </div>
      <Popup trigger={trigger} setTrigger={setTrigger} width={"w-8/12"}>
        <div className="popup-container flex flex-col w-full rounded-xl">
          <div className="content flex flex-col md:flex-row lg:grid lg:grid-cols-2 lg:gap-10 !p-10">
            <div
              className="faculty-overlay-image w-full h-[20em] lg:w-full lg:h-[22rem] rounded-xl"
              style={{
                backgroundImage: `url('${process.env.NEXT_PUBLIC_SERVER_HOST}${image}')`,
                backgroundSize: "cover",
                objectPosition: "center",
              }}
            ></div>
            <div className="text overflow-hidden">
              <h1 className="name font-bold text-orange text-2xl">{name}</h1>
              <p className="subject font-normal text-lg text-orange my-3">
                {department}
              </p>
              <p className="subject mb-4 font-normal">{description}</p>
              <p className="mb-4">
                <span className="font-bold">Area of Expertise</span>:{" "}
                {AreaofExpertise}
              </p>
              <p className="">
                <span className="font-bold">Experience</span>: {Experience}
              </p>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}
