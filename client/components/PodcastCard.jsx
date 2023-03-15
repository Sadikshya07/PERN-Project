import Link from "next/link";

export default function PodcastCard() {
  return (
    <div className="podcast-card-container mx-auto card-shadow w-11/12 h-[44em] md:h-[40em] lg:h-[36em] rounded-xl">
      <div
        className="card-image w-full h-2/4"
        style={{
          backgroundImage:
            "url(https://deerwalk.edu.np/sifalschool/public/images/Podcast/1678866087.jpg)",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="card-info p-4">
        <p className="title text-lg font-semibold">
          Read Aloud Podcast | Little Painters
        </p>
        <p className="podcast-by text-[#888888] text-sm mb-2">
          Suruchi Bimali - 34026, Grade 1
        </p>
        <p className="description mb-2 pb-2">
          This is one of the "reading aloud" activities for DSS students.We
          encouraged 'Siddhartha Aryal' from grade 1 to record the audio for the
          book "Little Painters" Written by Cheryl Rao and Illustrated by Tanvi
          Choudhary.
        </p>
        <Link href="/" className="text-center text-lg text-orange font-bold">
          <p>VIEW</p>
        </Link>
      </div>
    </div>
  );
}
