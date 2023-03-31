import Image from "next/image";
import Link from "next/link";

export default function StudentCornerCard({
  id,
  image,
  name,
  rollno,
  grade,
  title,
  description,
}) {
  const truncateText = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + ".....";
    } else {
      return str;
    }
  };
  return (
    <div className="podcast-card-container mx-auto card-shadow w-11/12 h-[44em] md:h-[40em] lg:h-[36em] rounded-xl">
      <div
        className="card-image w-full h-2/4"
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_SERVER_HOST}${image}')`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="card-info p-4">
        <p className="title text-lg font-semibold">{title}</p>
        <p className="podcast-by text-[#888888] text-sm mb-2">
          {`${name} - ${rollno}, Grade ${grade}`}
        </p>
        <p className="description mb-2 pb-2">
          {truncateText(description, 150)}
        </p>
        <Link
          href={`/student-corner/${id}`}
          className="text-center text-lg text-orange font-bold"
        >
          <p>READ MORE</p>
        </Link>
      </div>
    </div>
  );
}
