import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import SchoolinMediaFinder from "../../api/SchoolinMediaFinder";
import { useRouter } from "next/router";
import Popup from "reactjs-popup";

export default function Metrics() {
  const router = useRouter();
  const imageRef = useRef();
  const authorRef = useRef();
  const titleRef = useRef();
  const LinkRef = useRef();
  const [schoolMedia, setSchoolMedia] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SchoolinMediaFinder.get("/");
        console.log(response.data.data);
        setSchoolMedia(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SchoolinMediaFinder.post(
        "/",
        {
          title: titleRef.current.value,
          author: authorRef.current.value,
          Link: LinkRef.current.value,
          image: imageRef.current.files[0],
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await SchoolinMediaFinder.delete(`/${id}`);
      setSchoolMedia(
        schoolMedia.filter((schoolMedia) => {
          return schoolMedia.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id) => {
    router.push(`/admin/home/SchoolInMedia/${id}`);
  };
  return (
    <div>
      <Head>
        <title>Admin | Add School in Media</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <h1 className="text-orange text-2xl text-center font-bold m-10">
          School in Media
        </h1>
        <Popup
          trigger={<button className="add-data-button">Add Data</button>}
          modal
        >
          {(close) => (
            <form
              onSubmit={handleSubmit}
              className="w-[44rem] mx-auto px-6 py-12 rounded-xl"
            >
              <label htmlFor="name" className="text-lg font-medium w-[11em]">
                Title:{" "}
              </label>
              <input
                type="text"
                id="title"
                ref={titleRef}
                className="border-2 w-full p-2 rounded-lg mb-4"
                required
              ></input>
              <br />
              <label htmlFor="name" className="text-lg font-medium w-[11em]">
                Author:{" "}
              </label>
              <input
                type="text"
                id="author"
                ref={authorRef}
                className="border-2 w-full p-2 rounded-lg mb-4"
                required
              ></input>
              <br />
              <label htmlFor="name" className="text-lg font-medium w-[11em]">
                Link to Article:{" "}
              </label>
              <input
                type="text"
                id="title"
                ref={LinkRef}
                className="border-2 w-full p-2 rounded-lg mb-4"
                required
              ></input>
              <br />
              <label htmlFor="image" className="text-lg font-medium w-[11em]">
                Thumbnail Image:{" "}
              </label>
              <input
                type="file"
                id="image"
                ref={imageRef}
                placeholder="choose file"
                className="border-2 w-full p-2 rounded-lg mb-4"
              ></input>
              <br />
              <br />
              <button
                type="submit"
                className="w-full bg-orange hover:bg-[#cb5c1c] text-white text-xl font-bold py-4 rounded-xl"
              >
                Submit
              </button>
            </form>
          )}
        </Popup>
        <table className="table-style">
          <thead>
            <tr>
              <th className="table-header">Title</th>
              <th className="table-header">Author</th>
              <th className="table-header">Link</th>
              <th className="table-header">Image</th>
              <th className="table-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schoolMedia &&
              schoolMedia.map((media) => {
                return (
                  <tr key={media.id} className="border-b-2"> 
                    <td className="table-data">{media.title}</td>
                    <td className="table-data">{media.author}</td>
                    <td className="table-data">{media.Link}</td>
                    <td className="table-data">{media.Image}</td>
                    <td className="actions">
                      <Link href="/admin/home/SchoolInMedia/`${id}`">
                        <button
                          onClick={() => handleUpdate(media.id)}
                          className="update"
                        >
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(media.id)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </AdminLayout>
    </div>
  );
}
