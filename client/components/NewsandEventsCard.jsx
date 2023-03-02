import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function NewsandEventsCard({
  title,
  description,
  author,
  publishdate,
  image1,
}) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = new Date(publishdate);
  return (
    <>
      {console.log(d.getMonth())}
      {image1 && console.log(image1)}
      <div
        className="news-and-events w-[24rem] h-[36rem]  rounded-3xl relative my-3 "
        // style={{
        //   backgroundImage: `url(${image1 && image1})`,
        //   backgroundSize: "cover",
        // }}
      >
        <Image src={`${image1}`} fill cover quality={100} />

        <div className="news-overlay h-full rounded-3xl bg-gradient-to-t from-black to-transparent">
          <p className="absolute top-5 left-5 bg-orange w-[4rem] h-[4rem] flex justify-center items-center text-offWhite text-center rounded-full font-bold">
            {publishdate}
          </p>
          <p className="absolute bottom-5 left-5 w-[17em] font-bold text-offWhite text-2xl">
            {title}
          </p>
        </div>
      </div>
    </>
  );
}
