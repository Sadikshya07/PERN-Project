import Image from "next/image";
const SelectedArticle = ({ description, image1, image2 }) => {
  return (
    <main className="article-and-images w-8/12">
      <article>
        <p className="text-lg">{description}</p>
      </article>
      <div className="images">
        <div
          className="image1 bg-orange w-full h-[24em] my-8  object-contain  aspect-[3/4]"
          style={{
            background: `url('http://${image1}')`,
          }}
        >
          {/* <Image src={`http://${image1}`} fill quality={100} alt="Image 1" /> */}
        </div>
        <div
          className="image2 bg-orange w-full h-[24em] my-8 object-cover"
          style={{
            background: `url('http://${image2}')`,
          }}
        >
          {/* <Image src={`http://${image2}`} fill quality={100} alt="Image 2" /> */}
        </div>
      </div>
    </main>
  );
};

export default SelectedArticle;