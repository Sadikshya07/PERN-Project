import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NewsandEventsFinder from "../../api/NewsandEventsFinder";
import { useState, useEffect } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import { useRouter } from "next/router";

export default function NewsAndEvents() {
  const router = useRouter();
  const [author, setAuthor] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [publishdate, setDate] = useState();
  const [newsandevents, setNewsandEvents] = useState();
  const [error, setError] = useState("");
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await NewsandEventsFinder.get("/");
        console.log(response.data.data);
        setNewsandEvents(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await NewsandEventsFinder.post(
        "/",
        {
          author,
          title,
          image1,
          image2,
          description,
          publishdate,
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await NewsandEventsFinder.delete(`/${id}`);
      setNewsandEvents(
        newsandevents.filter((news) => {
          return news.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    router.push(`/admin/community/${id}`);
  };
  return (
    <div>
      <Head>
        <title>Admin | News and Events</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <h1 className="text-orange text-2xl text-center font-bold m-10">
          News and Events
        </h1>
        <table className="table-style">
          <thead>
            <tr className="bg-gray px-4 py-2 border-b-2">
              <th className="px-5 py-3">Author</th>
              <th className="px-5 py-3">Title</th>
              <th className="px-5 py-3">Description</th>
              <th className="px-5 py-3">Date</th>
              {/* <th>Image</th> */}
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsandevents &&
              newsandevents.map((news) => {
                return (
                  <tr key={news.id} className="border-b-2">
                    <td className="px-5 py-3">{news.author}</td>
                    <td className="px-5 py-3">{news.title}</td>
                    <td className="px-5 py-3">{news.description}</td>
                    <td className="table-data-padding">{news.publishdate}</td>
                    <div className="flex flex-col px-5 py-3">
                      <td>
                        <Link href="/admin/community/`id`">
                          <button
                            onClick={() => handleUpdate(news.id)}
                            className="update"
                          >
                            Update
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(news.id)}
                          className="delete"
                        >
                          Delete
                        </button>
                      </td>
                    </div>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="main-container">
          <br />
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="border-4 border-orange w-[44rem] mx-auto px-6 py-12 rounded-xl"
          >
            <label htmlFor="fname" className="text-lg font-medium w-[11em]">
              Full name:
            </label>
            <input
              type="text"
              id="fname"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
            <br />
            <label for="description" className="text-lg font-medium w-[11em]">
              Description:
            </label>
            <textarea
              type="text"
              id="description"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4 h-[8em]"
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <br />
            <label for="Title" className="text-lg font-medium w-[11em]">
              Title:
            </label>
            <input
              type="text"
              id="Title"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <br />
            <label for="Date" className="text-lg font-medium w-[11em]">
              Date:
            </label>
            <input
              type="date"
              id="Date"
              placeholder="date"
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
              onChange={(e) => setDate(new Date(e.target.value))}
            ></input>
            <br />
            <label for="image" className="text-lg font-medium w-[11em]">
              Image 1:
            </label>
            <input
              type="file"
              id="image"
              placeholder="Choose a file"
              className="border-2 w-full p-2 rounded-lg mb-4"
              onChange={(e) => {
                setImage1(e.target.files[0]);
              }}
              required
            ></input>
            <br />
            <label for="image" className="text-lg font-medium w-[11em]">
              Image 2:
            </label>
            <input
              type="file"
              id="image"
              placeholder="Choose a file"
              className="border-2 w-full p-2 rounded-lg mb-4"
              onChange={(e) => {
                setImage2(e.target.files[0]);
              }}
              required
            ></input>
            <br />
            <button
              type="submit"
              className="w-full bg-orange hover:bg-[#cb5c1c] text-white text-xl font-bold py-4 rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </AdminLayout>
    </div>
  );
}
