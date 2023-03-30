import HomeLayout from "../../components/Layouts/HomeLayout";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import StudentCornerFinder from "../api/StudentCornerFinder";
import Image from "next/image";

const singleNews = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedArticle, setSelectedArtice] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StudentCornerFinder.get(`/${id}`);
        setSelectedArtice(response.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    if (id) fetchData();
  }, [id]);

  return (
    <HomeLayout>
      {selectedArticle && (
        <div className=" my-10 mx-auto w-11/12 text-orange">
          <h1 className="title text-center font-bold text-5xl text-orange font-inter">
            {selectedArticle.articletitle}
          </h1>
          <div className="author flex justify-between">
            <p className="font-bold text-2xl">
              Written By:
              {` ${selectedArticle.studentname} - ${selectedArticle.rollnumber}, Grade ${selectedArticle.grade}`}
            </p>
            <p className="font-bold text-2xl">
              Posted date: {selectedArticle.createdAt}{" "}
            </p>
          </div>
          <div className="flex  items-center justify-center rounded-md gap-4">
            <Image
              src={process.env.NEXT_PUBLIC_SERVER_HOST + selectedArticle.image}
              width={400}
              height={500}
              className="rounded-md"
            />
            <p className="w-2/4 text-black font-medium text-xl text-justify">
              {selectedArticle.articlecontent}
            </p>
          </div>
        </div>
      )}
    </HomeLayout>
  );
};

export default singleNews;
