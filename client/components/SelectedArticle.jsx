import Image from "next/image";
const SelectedArticle = ({ description, image1, image2 }) => {
  return (
    <main className="article-and-images w-8/12">
      <article>
        <p className="text-lg">{description}</p>
      </article>
      <div className="images">
        <div
          className="image1 bg-orange w-full h-[30em] my-8 rounded-xl"
          style={{
            background: `url('${process.env.NEXT_PUBLIC_SERVER_HOST}${image1}')`,
            backgroundSize: "cover",

          }}
        >
        </div>
        <div
          className="image2 bg-orange w-full h-[30em] my-8 rounded-xl"
          style={{
            background: `url('${process.env.NEXT_PUBLIC_SERVER_HOST}${image2}')`,
            backgroundSize: "cover",
          }}
        >
        </div>
      </div>
    </main>
  );
};

export default SelectedArticle;
