import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function HeroSection({ url, title }) {
  return (
    <div className="hero-section relative w-full h-[20em] md:h-[30em] -z-50">
      {url && (
        <div
          className="content w-full h-full"
          style={{
            backgroundImage: `url('http://localhost:3000/${url}')`,
            backgroundSize: "cover",
          }}
        >
          <div className="title-card rounded-r-full bg-orange absolute bottom-14">
            <p className="md:text-2xl font-bold px-[3em] py-[2em] text-white">
              {title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
