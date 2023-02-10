import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function DSSCoursesCard({name,description}) {
  return (
    <div className="dss-courses-card  p-3 shadow-lg  rounded-xl mx-auto w-7/12 my-5 ">
      <p className="title text-center text-orange font-bold text-2xl">
        Byabaharik Sanskrit Shikshaya
      </p>
      <p className="description mt-1 p-5 mb-10">
        DSS students learn Sanskrit Language for four years at the Elementary
        school level, and they will be learning 'Byabaharik Sanskrit Shikshaya'
        in the Middle School for the next four years. Under this, the Sanskrit
        Department designs and teaches multiple Eastern Philosophical topics on
        Chanakya Niti, Bidu Niti, Geeta, Ayurved Shikshaya in the Sanskrit
        language.
      </p>
    </div>
  );
}
