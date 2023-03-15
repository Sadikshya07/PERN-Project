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
        <title>Add School in Media</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="main-container">
          <h1>School in Media</h1>
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
