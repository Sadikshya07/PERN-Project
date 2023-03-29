import Image from "next/image";
const SelectedArticle = ({ description, image1, image2 }) => {
  return (
    <main className="article-and-images w-8/12">
      <article>
        <p className="text-lg">{description}</p>
      </article>
      <div className="images">
        <div
          className="image1 bg-orange w-full h-[36em] my-8 object-cover aspect-[3/4]"
          style={{
            background: `url('${process.env.NEXT_PUBLIC_SERVER_HOST}${image1}')`,
          }}
        >
          {/* <Image src={`http://${image1}`} fill quality={100} alt="Image 1" /> */}
        </div>
        <div
          className="image2 bg-orange w-full h-[36em] my-8 object-cover aspect-[3/4]"
          style={{
            background: `url('${process.env.NEXT_PUBLIC_SERVER_HOST}${image2}')`,
          }}
        >
          {/* <Image src={`http://${image2}`} fill quality={100} alt="Image 2" /> */}
        </div>
      </div>
    </main>
  );
};

export default SelectedArticle;
