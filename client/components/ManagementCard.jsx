import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function ManagementCard(props) {
  return (
    <div className="management-card flex flex-col m-10 ">
      <div className="photo">
        <Image
          src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg"
          alt="sir the great"
          height={300}
          width={600}
          className="mx-auto rounded-3xl"
        />
      </div>
      <div className="info text-center">
        <h1 className="text-4xl text-[#D8743A] font-bold">Joe Shmoe</h1>
        <p className="font-semibold text-lg">Joe's Role here</p>
      </div>
      <p className="description mx-auto w-[37.5rem] my-5 text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora magni
        repellendus nihil vel saepe, pariatur aliquam dolor explicabo expedita
        quasi id debitis, repudiandae ipsum error corporis rem dicta modi
        adipisci. Iusto accusantium quibusdam aliquam, vitae voluptas eius quod
        facilis. Incidunt laboriosam, explicabo unde itaque expedita esse nulla
        nobis dolores assumenda, obcaecati sint suscipit quasi corrupti debitis
        impedit eaque repellendus atque.
      </p>
    </div>
  );
}
