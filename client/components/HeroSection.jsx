import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function HeroSection({url, title}) {
  return (
    <div className="hero-section relative w-full h-[20em] md:h-[30em] -z-50">
      <div
        className="content w-full h-full"
        style={{
          backgroundImage:
            "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="title-card rounded-r-full bg-orange absolute bottom-14">
            <p className="md:text-2xl font-bold px-[3em] py-[2em] text-white">{title}</p>
        </div>
      </div>
    </div>
  );
}
