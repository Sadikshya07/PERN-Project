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
        <div className=" my-10 mx-auto w-11/12">
          <h1 className="title text-center"> {selectedArticle.articletitle}</h1>
          <div className="author flex justify-between">
            <p>
              Written By:{" "}
              {`${selectedArticle.studentname} - ${selectedArticle.rollnumber}, Grade ${selectedArticle.grade}`}
            </p>
            <p>Posted date {selectedArticle.createdAt} </p>
          </div>
          <div className="flex flex-col items-center rounded-md gap-4">
            <Image
              src={process.env.NEXT_PUBLIC_SERVER_HOST + selectedArticle.image}
              width={400}
              height={500}
              className="rounded-md"
            />
            <p className="w-2/4">{selectedArticle.articlecontent}</p>
          </div>
        </div>
      )}
    </HomeLayout>
  );
};

export default singleNews;
