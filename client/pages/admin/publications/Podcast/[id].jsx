import Head from "next/head";
import PodcastFinder from "../../api/PodcastFinder";
import { useEffect, useState, useRef} from "react";
import { useRouter } from "next/router";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import Popup from "reactjs-popup";

export default function Podcast() {
  const router = useRouter();
  const { id } = router.query;
  const [PresenterName, setPresenterName] = useState();
  const [Rollno, setRollno] = useState();
  const [Grade, setGrade] = useState();
  const [Link,setLink] = useState();
  const [image, setImage] = useState();
  const [title,setTitle] = useState();
  const [PodcastDescription, setPodcastDescription] = useState();
  const [error, setError] = useState("");
  const [podcast, setPodcast] = useState();
  let i = 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PodcastFinder.get(`/${id}`);
        setPresenterName(response.data.data.item.presentername);
        setRollno(response.data.data.item.rollnumber);
        setGrade(response.data.data.item.grade);
        setPodcastDescription(response.data.data.item.description);
        setImage(response.data.data.item.image);
        setLink(response.data.data.item.Link);
        setTitle(response.data.data.item.title);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await PodcastFinder.post("/", {
        PresenterName,
        Rollno,
        Grade,
        PodcastDescription,
        title,
        image: imageRef.current.files[0],
        Link,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Head>
        <title>Podcast</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
            <form
            onSubmit={handleSubmit}
            className="w-[44rem] mx-auto px-6 py-12 rounded-xl"
          >
            <label for="name" className="text-lg font-medium w-[11em]">
              Presenter Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
              onChange={(e) => setPresenterName(e.target.value)}
            ></input>
            <br />
            <label for="grade" className="text-lg font-medium w-[11em]">
              Grade:
            </label>
            <input
              type="text"
              id="grade"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
              onChange={(e) => setGrade(e.target.value)}
            ></input>{" "}
            <br />
            <label for="title" className="text-lg font-medium w-[11em]">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
              onChange={(e) => setGrade(e.target.value)}
            ></input>{" "}
            <br />
            <label for="rollno" className="text-lg font-medium w-[11em]">
              Rollno:
            </label>
            <input
              type="text"
              id="rollno"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
              onChange={(e) => setRollno(e.target.value)}
            ></input>{" "}
            <br />
            <label for="video" className="text-lg font-medium w-[11em]">
              Video link:
            </label>
            <input
              type="url"
              id="video"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
            ></input>
            <br />
            <label htmlFor="description" className="text-lg font-medium w-[11em]">
              Podcast Description
            </label>
            <textarea
              type="text"
              id="description"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4 h-[8em]"
              required
              onChange={(e) => setPodcastDescription(e.target.value)}
            ></textarea>
            <br />
            <label for="image" className="text-lg font-medium w-[11em]">
              Image:
            </label>
            <input
              type="file"
              id="image"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
            ></input>{" "}
            <br />
            <button
              type="submit"
              className="w-full bg-orange hover:bg-[#cb5c1c] text-white text-xl font-bold py-4 rounded-xl"
            >
              Submit
            </button>
          </form>
      </AdminLayout>
    </div>
  );
}
