const RelatedArticles = ({ otherArticle }) => {
  const otherarticles = otherArticle.map((article) => {
    return (
      <div className="other-posts-card" key={article.id}>
        <div
          className="card w-[18rem] h-[18rem] bg-orange rounded-xl mb-4 object-fill"
          style={{
            background: `url('http://localhost:3000${article.image1}')`,
          }}
        ></div>
        <p className="text-orange font-semibold text-2xl w-[18rem]">
          {article.title}
        </p>
      </div>
    );
  });

  return (
    <aside className="other-posts flex flex-col gap-y-8">
      <h1 className="text-3xl text-center font-semibold">Other Posts</h1>
      {otherarticles}
    </aside>
  );
};

export default RelatedArticles;
