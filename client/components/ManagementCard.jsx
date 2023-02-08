import Image from "next/image";

export default function ManagementCard({ name, description, position }) {
  return (
    <div className="management-card flex flex-col m-10 ">
      <div className="photo">
        <Image
          src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
          alt="sir the great"
          height={300}
          width={600}
          className="mx-auto rounded-3xl"
        />
      </div>
      <div className="info text-center">
        <h1 className="text-4xl text-[#D8743A] font-bold mt-5">{name}</h1>
        <p className="font-semibold text-lg">{position}</p>
      </div>
      <p className="description mx-auto w-[37.5rem] my-5 text-xl">
        {description}
      </p>
    </div>
  );
}
