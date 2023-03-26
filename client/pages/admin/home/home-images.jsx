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
          <h1 className="text-orange text-2xl text-center font-bold m-10">Add Homepage Images</h1>
          <form onSubmit={handleSubmit} className="border-4 border-orange w-[44rem] mx-auto px-6 py-12 rounded-xl">
              <label for="image1" className="text-lg font-medium w-[5em]">Image 1:</label>
              <input
                type="file"
                id="image1"
                ref={image1Ref}
                placeholder="choose file"
                className="border-2 w-full p-2 rounded-lg mb-4"
              ></input>
            <br />
              <label for="image2" className="text-lg font-medium w-[5em]">Image 2:</label>
              <input
                type="file"
                id="image2"
                ref={image2Ref}
                placeholder="choose file"
                className="border-2 w-full p-2 rounded-lg mb-4"
              ></input>
            <br />
              <label for="image3" className="text-lg font-medium w-[5em]">Image 3:</label>
              <input
                type="file"
                id="image3"
                placeholder="choose file"
                ref={image3Ref}
                className="border-2 w-full p-2 rounded-lg mb-4"
              ></input>
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
