import Link from "next/link";

const RelatedArticles = ({ otherArticle }) => {
  const otherarticles = otherArticle.map((article) => {
    return (
      <Link href={`/news-and-events/${article.id}`}>
        <div className="other-posts-card" key={article.id}>
          <div
            className="card w-[18rem] h-[18rem] bg-orange rounded-xl mb-4 object-fill"
            style={{
              background: `url('${process.env.NEXT_PUBLIC_SERVER_HOST}${article.image1}')`,
              backgroundSize: "cover",
            }}
          ></div>
          <p className="text-orange text-center font-semibold text-2xl w-[18rem]">
            {article.title}
          </p>
        </div>
      </Link>
    );
  });

  return (
    <aside className="other-posts flex flex-col gap-y-8 mb-10">
      <h1 className="text-3xl text-center font-semibold">Other Posts</h1>
      {otherarticles}
    </aside>
  );
};

export default RelatedArticles;
