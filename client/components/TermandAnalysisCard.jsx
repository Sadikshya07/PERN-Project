import Image from "next/image";
import Head from "next/head";
import Link from "next/link";


export default function TermAndAnalysisReport({name}) {
  return (
    <div className="card flex flex-col ">
      <div className="card-content relative w-[18em] h-[24em] rounded-xl shadow-lg bg-white  my-10 mx-auto">
        <Image
          src={
            "/src/assets/newsletter-image.jpg"
          }
          alt={"newsletter thumbnail"}
          height={300}
          width={600}
          className="rounded-t-xl"
        />

        <div className="bottom-content w-full absolute bottom-4 text-center text-black ">
          <div className="title w-11/12 mx-auto text-xl font-semibold">{name}
          </div>
          <div className="view-button mt-6 font-bold text-base text-[#D8743A]">
            <Link href="https://deerwalk.edu.np/sifalschool/public/uploads/Publications/newsletter/NewsletterFalgun2079_1678872462.pdf">VIEW</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
