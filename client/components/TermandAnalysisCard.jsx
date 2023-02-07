import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function TermAndAnalysisReport() {
  return (
    <div className="card flex flex-col ">
      <div className="card-content relative w-[18em] h-[24em] rounded-xl shadow-lg bg-white  my-10 mx-auto">
        <Image
          src={
            "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
          }
          alt={"Sir the greate"}
          height={300}
          width={600}
          className="rounded-t-xl"
        />

        <div className="bottom-content w-full absolute bottom-4 text-center text-black ">
          <div className="title w-11/12 mx-auto text-xl font-semibold">
            Newsletter - Chaitra
          </div>
          <div className="view-button mt-6 font-bold text-base text-[#D8743A]">
            <Link href="/">VIEW</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
