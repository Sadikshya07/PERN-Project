import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SchoolinMediaFinder from "../../../api/SchoolinMediaFinder";
import AdminLayout from "../../../../components/Layouts/AdminLayout";
import { useRouter } from "next/router";
import { useState,useRef,useEffect } from "react";

export default function UpdateManagement() {
  const router = useRouter();
  const { id } = router.query;
  const imageRef = useRef();
  const authorRef = useRef();
  const titleRef = useRef();
  const linkRef = useRef();
  const [schoolMedia, setSchoolMedia] = useState();
  const [image,setImage] = useState();
  const [author,setAuthor] = useState(); 
  const [title,setTitle] = useState();
  const [link,setLink] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SchoolinMediaFinder.get(`/${id}`);
        console.log(response.data.data);
        setImage(response.data.data.media.image);
        setAuthor(response.data.data.media.author);
        setTitle(response.data.data.media.title);
        setLink(response.data.data.media.link);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await SchoolinMediaFinder.put(`/${id}`, {
      author,
      title,
      link,
      image,
    },
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
    );
    router.push(`/admin/home/school-in-media`);
  };

  return (
    <div>
      <Head>
        <title>Admin | Update-SchoolinMedia</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div>
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
