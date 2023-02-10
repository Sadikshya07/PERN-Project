import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function NewsandEventsCard(title,description,author,publishdate) {
  return (
    <div
      className="news-and-events w-[24rem] h-[36rem] bg-no-repeat bg-center bg-cover flex flex-col justify-between p-3 items-start rounded-xl mt-3 "
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(217, 217, 217, 0) 10.42%, #000000 80.21%)  ,url("https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg")`,
      }}
    >
      <p className="bg-orange text-center text-white rounded-full px-3 font-semibold py-2 text-base">
        {publishdate}
      </p>
      <p className="text-white font-bold text-2xl">
       {title}
      </p>
    </div>
  );
}
