import Head from "next/head";
import HomeLayout from "../components/Layouts/HomeLayout";
import HeroSectionCard from "../components/HeroSection";
import StudentCornerCard from "../components/StudentCornerCard";

export default function StudentCorner() {
  return (
    <>
      <Head>
        <title>Sifal School</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <HeroSectionCard url=" " title="Student Corner" />
        <div className="mx-auto my-10 grid w-11/12 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10">
          <StudentCornerCard />
          <StudentCornerCard />
          <StudentCornerCard />
          <StudentCornerCard />
        </div>
      </HomeLayout>
    </>
  );
}
