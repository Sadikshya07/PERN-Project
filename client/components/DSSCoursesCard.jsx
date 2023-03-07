import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function DSSCoursesCard({name,description}) {
  return (
    <div className="dss-courses-card  p-3 shadow-lg w-[24em] rounded-xl mx-auto my-5 ">
      <p className="title text-center text-orange font-bold text-2xl">
        {name}
      </p>
      <p className="description mt-1 p-5  mb-10">
        {description}
      </p>
    </div>
  );
}
