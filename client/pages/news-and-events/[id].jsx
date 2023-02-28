import SelectedArticle from "../../components/SelectedArticle";
import RelatedArticles from "../../components/RelatedArticles";
import HomeLayout from "../../components/Layouts/HomeLayout";
import { useRouter } from "next/dist/client/router";

export default function NewsTemplate() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="news-temlate-container">
      <HomeLayout>
        <div className="wrapper w-11/12 mx-auto">
          <header className="text-center">
            <h1 className="text-3xl text-orange font-bold mt-8">
              Deerwalk Sifal Night | Elementary School
            </h1>
            <p className="info text-orange text-xl my-4">
              By <span className="italic">Alisha</span> on
              <span className="italic"> 2022-03-21</span>
            </p>
          </header>
          <div className="content flex justify-between">
            <SelectedArticle />
            <RelatedArticles />
          </div>
        </div>
      </HomeLayout>
    </div>
  );
}
