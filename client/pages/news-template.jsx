import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NewsTemplate() {
  return (
    <div className="news-temlate-container">
      <Navbar />
      <div className="wrapper w-11/12 mx-auto">
        <header className="text-center">
          <h1 className="text-3xl text-orange font-bold mt-8">
            Deerwalk Sifal Night | Elementary School
          </h1>
          <p className="info text-orange text-xl my-4">
            By <span className="italic">Alisha</span> on{" "}
            <span className="italic">2022-03-21</span>
          </p>
        </header>
        <div className="content flex justify-between">
          <main className="article-and-images w-8/12">
            <article>
              <p className="text-lg"> 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas earum officia totam a, qui sint itaque. Sequi eligendi,
                incidunt nobis repellendus veritatis ipsum culpa voluptates
                voluptate veniam facere, et nulla! Perferendis perspiciatis vero
                voluptatum. Voluptas officia laboriosam accusantium est quaerat
                consequatur possimus minima blanditiis maxime, deserunt aut
                aspernatur natus corrupti quos soluta iste, eum earum hic.
                Tempore delectus repellat natus. Fugiat iure unde id dolor
                repudiandae iste. Ad facilis consequuntur cumque nemo impedit
                architecto quasi nobis, magnam officiis aliquam veritatis!
                Commodi fuga sed perferendis nisi adipisci explicabo esse vero
                vel. Deserunt saepe, non animi, sint dolore cum nulla nihil
                nesciunt magni rem error ratione veniam perferendis eveniet,
                velit molestias exercitationem deleniti! Quos, quis nemo. Culpa
                voluptates quibusdam cum eaque iste? Fugit nostrum autem
                necessitatibus obcaecati repudiandae deserunt laborum libero
                minima iste ad, enim distinctio consequatur soluta. Ea quae
                cumque esse recusandae in eligendi corporis, sit, odio aliquam,
                quidem animi accusantium?
              </p>
            </article>
            <div className="images">
              <div className="image1 bg-orange w-full h-[24em] my-8"></div>
              <div className="image2 bg-orange w-full h-[24em] my-8"></div>
            </div>
          </main>
          <aside className="other-posts flex flex-col gap-y-8">
            <h1 className="text-3xl text-center font-semibold">
              Other Posts
            </h1>
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
        </div>
      </div>
    <Footer />
    </div>
  );
}
