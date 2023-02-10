import Image from "next/image";

export default function ManagementCard({ name, description, position }) {
  return (
    <div className="management-card m-10 flex flex-col ">
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
        <h1 className="mt-5 text-4xl font-bold text-[#D8743A]">{name}</h1>
        <p className="text-xl font-semibold">{position}</p>
      </div>
      <p className="description mx-auto my-5 w-[37.5rem] px-6 text-center text-xl">
        {description}
      </p>
    </div>
  );
}
