import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState,useEffect} from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import SchoolinMediaFinder from "../../api/SchoolinMediaFinder";
import {useRouter} from "next/router"

export default function Metrics() {
  const router = useRouter();
  const imageRef = useRef();
  const authorRef = useRef();
  const titleRef = useRef();
  const linkRef = useRef();
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
          Link: linkRef.current.value,
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
        <title>Add School in Media</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="main-container">
          <h1>School in Media</h1>
          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Title</th>
                <th>Author</th>
                <th>Link</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             {schoolMedia &&
              schoolMedia.map((media) => {
              return (
            <tr key={media.id} >
            <td>{media.title}</td>
            <td>{media.author}</td>
            <td>{media.Link}</td>
            <td>{media.image}</td>
            <td>
              <Link href="/admin/home/SchoolInMedia/`${id}`">
                <button
                onClick = {() => handleUpdate(media.id)}
                className="border-2">Update</button>
              </Link>
            </td>
            <td>
              <button
              onClick = {() => handleDelete(media.id)}
              className="border-2">Delete</button>
            </td>
            </tr>
              );
             })
           }
           </tbody>
          </table>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Title: </label>
            <input
              type="text"
              id="title"
              ref={titleRef}
              className="border-2"
              required
            ></input>
            <br />
            <label htmlFor="name">Author: </label>
            <input
              type="text"
              id="author"
              ref={authorRef}
              className="border-2"
              required
            ></input>
            <br />
            <label htmlFor="name">Link: </label>
            <input
              type="text"
              id="title"
              ref={linkRef}
              className="border-2"
              required
            ></input>
            <br />
            <label htmlFor="name">Image: </label>
            <input
              type="file"
              id="image"
              ref={imageRef}
              placeholder="choose file"
              className="border-2"
            ></input>
            <br />
            <br />
            <button type="submit" className="border-2">
              Submit
            </button>
          </form>
        </div>
      </AdminLayout>
    </div>
  );
}
