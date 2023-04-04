import Image from "next/image";
import Head from "next/head";
import Link from "next/link";


export default function TermAndAnalysisReport({name}) {
  return (
    <div className="card flex flex-col ">
      <div className="card-content relative w-[18em] h-[24em] rounded-xl shadow-lg bg-white  my-10 mx-auto">
        <div className="image-container">
          <Image
            src={
              "/src/assets/newsletter-image.jpg"
            }
            alt={"newsletter thumbnail"}
            fill
            // height={300}
            // width={600}
            className="rounded-t-xl"
          />
        </div>
        <div className="bottom-content w-full absolute bottom-4 bg-offWhite text-center text-black ">
          <div className="title w-[12rem] mx-auto text-xl mt-4 font-semibold">{name}
          </div>
          <div className="view-button mt-2 font-bold text-base text-[#D8743A]">
            <Link href="https://deerwalk.edu.np/sifalschool/public/uploads/Publications/newsletter/NewsletterFalgun2079_1678872462.pdf">VIEW</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
