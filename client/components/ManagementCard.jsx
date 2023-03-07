import Image from "next/image";

export default function ManagementCard({ name, description, position }) {
  return (
    <div className="management-card my-10 lg:m-10 flex flex-col ">
      <div className="photo">
        <div
          className="image-container w-full h-[20em] md:h-[30em] mx-auto rounded-3xl"
          style={{
            backgroundImage:
              "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
            backgroundSize: "cover",
          }}
        >
        </div>
      </div>
      <div className="info text-center">
        <h1 className="mt-5 text-2xl md:text-4xl font-bold text-orange">{name}</h1>
        <p className="text-lg md:text-xl font-semibold">{position}</p>
      </div>
      <p className="description mx-auto my-4 md:w-[37.5rem] px-6 text-center text-lg md:text-xl">
        {description}
      </p>
    </div>
  );
}
