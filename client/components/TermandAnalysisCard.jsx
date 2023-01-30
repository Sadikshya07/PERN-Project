import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function TermAndAnalysisReport() {
  return (
    <div className="card">
      <div className="card-content bg-orange relative w-[18em] h-[24em] rounded-xl">
        <div
          className="image w-full h-9/12"
          style={{
            backgroundImage:
              "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="bottom-content w-full absolute bottom-4 text-center">
          <div className="title w-11/12 mx-auto font-semibold">ncjsdnc nsjdknc ncksjn cnduj ncjd cnjd cjdb</div>
          <div className="view-button mt-6 font-bold">
            <Link href="/">VIEW</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
