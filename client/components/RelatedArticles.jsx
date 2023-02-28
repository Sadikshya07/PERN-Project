const RelatedArticles = ({}) => {
  return (
    <aside className="other-posts flex flex-col gap-y-8">
      <h1 className="text-3xl text-center font-semibold">Other Posts</h1>
      <div className="other-posts-card">
        <div className="card w-[18rem] h-[18rem] bg-orange rounded-xl mb-4"></div>
        <p className="text-orange font-semibold text-2xl w-[18rem]">
          This is another news.
        </p>
      </div>
      <div className="other-posts-card">
        <div className="card w-[18rem] h-[18rem] bg-orange rounded-xl mb-4"></div>
        <p className="text-orange font-semibold text-2xl w-[18rem]">
          This is another news.
        </p>
      </div>
      <div className="other-posts-card">
        <div className="card w-[18rem] h-[18rem] bg-orange rounded-xl mb-4"></div>
        <p className="text-orange font-semibold text-2xl w-[18rem]">
          This is another news.
        </p>
      </div>
    </aside>
  );
};

export default RelatedArticles;
