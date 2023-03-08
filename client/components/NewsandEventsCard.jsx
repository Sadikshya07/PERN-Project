import Image from "next/image";
import Link from "next/link";

export default function NewsandEventsCard({
  title,
  id,
  description,
  author,
  publishdate,
  image1,
}) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let d = new Date(publishdate);
  return (
    <Link href={`/news-and-events/${id}`} className={`flex`}>
      <div
        className="news-and-events w-[24rem] h-[36rem] border-0 rounded-3xl relative my-3 "
        style={{
          backgroundImage: `url('http://localhost:3000${image1}')`,
          backgroundSize: "cover",
        }}
      >
        {/* <Image src={`http://${image1}`} fill  quality={100} /> */}

        <div className="news-overlay h-full rounded-3xl bg-gradient-to-t from-black to-transparent ">
          <p className="absolute top-5 left-5 bg-orange w-[4rem] h-[4rem] flex justify-center items-center text-offWhite text-center rounded-full font-bold">
            {`${d.getDate()}`}
            <br />
            {`${months[d.getMonth()]}`}
          </p>
          <p className="absolute bottom-5 left-5 w-[17em] font-bold text-offWhite text-2xl">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}
