import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import ProgramsFinder from "../../api/ProgramsFinder";

export default function Programs() {
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ProgramsFinder.post(
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
        <title>Add Programs</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="form-container">
          <h1>Add Programs</h1>
          <form onSubmit={handleSubmit}>
            <label for="image1">Elementary School:</label>
            <input
              type="file"
              id="elementaryschool"
              ref={image1Ref}
              placeholder="choose file"
              className="border-2"
            ></input>
            <br />
            <label for="image2">Middle School:</label>
            <input
              type="file"
              id="middleschool"
              ref={image2Ref}
              placeholder="choose file"
              className="border-2"
            ></input>
            <br />
            <label for="image3">High School:</label>
            <input
              type="file"
              id="highschool"
              ref={image3Ref}
              placeholder="choose file"
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
