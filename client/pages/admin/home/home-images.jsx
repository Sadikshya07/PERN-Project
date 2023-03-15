import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import HomeImageFinder from "../../api/HomeImageFinder";

export default function Images() {
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await HomeImageFinder.post(
        "/",
        {
          image1: image1Ref.current.files[0],
          image2: image2Ref.current.files[0],
          image3: image3Ref.current.files[0],
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
        <title>Add Homepage Images</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="form-container">
          <h1>Add Homepage Images</h1>
          <form onSubmit={handleSubmit}>
            <label for="image1">Image 1:</label>
            <input
              type="file"
              id="image1"
              ref={image1Ref}
              placeholder="choose file"
              className="border-2"
            ></input>
            <br />
            <label for="image2">Image 2:</label>
            <input
              type="file"
              id="image2"
              ref={image2Ref}
              placeholder="choose file"
              className="border-2"
            ></input>
            <br />
            <label for="image3">Image 3:</label>
            <input
              type="file"
              id="image3"
              placeholder="choose file"
              ref={image3Ref}
              className="border-2"
            ></input>
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
