import SelectedArticle from "../../components/SelectedArticle";
import RelatedArticles from "../../components/RelatedArticles";
import HomeLayout from "../../components/Layouts/HomeLayout";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import NewsandEventsFinder from "../api/NewsandEventsFinder";

export default function NewsTemplate() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedArticle, setSelectedArtice] = useState();
  const [otherArticle, setOtherArticle] = useState();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await NewsandEventsFinder.get(`/${id}`);
        const sideArray = await NewsandEventsFinder.get(`/only4`);
        setOtherArticle(sideArray.data.data);
        const datas = response.data.data;
        setSelectedArtice(datas);
        // console.log("data is " + response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchData();
  }, [id]);

  let d = selectedArticle && new Date(selectedArticle.publishdate);

  return (
    <div className="news-temlate-container">
      <HomeLayout>
        <div className="wrapper w-11/12 mx-auto">
          {selectedArticle && (
            <>
              <header className="text-center">
                <h1 className="text-3xl text-orange font-bold mt-8">
                  {selectedArticle.title}
                </h1>
                <p className="info text-orange text-xl my-4">
                  By <span className="italic">{selectedArticle.author}</span> on
                  <span className="italic">
                    {" "}
                    {`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`}
                  </span>
                </p>
              </header>
              <div className="content flex justify-between">
                {selectedArticle && (
                  <SelectedArticle
                    description={selectedArticle.description}
                    image1={selectedArticle.image1}
                    image2={selectedArticle.image2}
                  />
                )}
                <RelatedArticles otherArticle={otherArticle} />
              </div>
            </>
          )}
        </div>
      </HomeLayout>
    </div>
  );
}
