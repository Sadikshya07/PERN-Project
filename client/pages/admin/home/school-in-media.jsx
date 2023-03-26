import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import SchoolinMediaFinder from "../../api/SchoolinMediaFinder";

export default function Metrics() {
  const imageRef = useRef();
  const authorRef = useRef();
  const titleRef = useRef();
  const linkRef = useRef();

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
  return (
    <div>
      <Head>
        <title>Admin | Add School in Media</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="main-container">
          <h1 className="text-orange text-2xl text-center font-bold m-10">School in Media</h1>
          <form onSubmit={handleSubmit} className="border-4 border-orange w-[44rem] mx-auto px-6 py-12 rounded-xl">
            <label htmlFor="name" className="text-lg font-medium w-[11em]">Title: </label>
            <input
              type="text"
              id="title"
              ref={titleRef}
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
            ></input>
            <br />
            <label htmlFor="name" className="text-lg font-medium w-[11em]">Author: </label>
            <input
              type="text"
              id="author"
              ref={authorRef}
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
            ></input>
            <br />
            <label htmlFor="name" className="text-lg font-medium w-[11em]">Link to Article: </label>
            <input
              type="text"
              id="title"
              ref={linkRef}
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
            ></input>
            <br />
            <label htmlFor="image" className="text-lg font-medium w-[11em]">Thumbnail Image: </label>
            <input
              type="file"
              id="image"
              ref={imageRef}
              placeholder="choose file"
              className="border-2 w-full p-2 rounded-lg mb-4"
            ></input>
            <br />
            <br />
            <button type="submit" className="w-full bg-orange hover:bg-[#cb5c1c] text-white text-xl font-bold py-4 rounded-xl">
              Submit
            </button>
          </form>
        </div>
      </AdminLayout>
    </div>
  );
}
