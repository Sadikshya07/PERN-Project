import Link from "next/link";

export default function PodcastCard() {
  return (
    <div className="podcast-card-container mx-auto card-shadow w-11/12 h-[44em] md:h-[40em] lg:h-[36em] rounded-xl">
      <div
        className="card-image w-full h-2/4"
        style={{
          backgroundImage:
            "url(https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg)",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="card-info p-4">
        <p className="title text-lg font-semibold">
          Read Aloud Podcast | Little Painters
        </p>
        <p className="podcast-by text-[#888888] text-sm mb-2">
          Siddhartha Aryal - 34032, Grade 1
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
