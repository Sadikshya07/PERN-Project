import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";

export default function Images() {
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await console.log("Nothing"); // api waiting
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
          <form>
            <label for="image1">Image 1:</label>
            <input
              type="file"
              id="image1"
              onChange={(e) => {
                setImage1(e.target.files[0]);
              }}
              placeholder="choose file"
              className="border-2"
            ></input>
            <br />
            <label for="image2">Image 2:</label>
            <input
              type="file"
              id="image2"
              onChange={(e) => {
                setImage2(e.target.files[0]);
              }}
              placeholder="choose file"
              className="border-2"
            ></input>
            <br />
            <label for="image3">Image 3:</label>
            <input
              type="file"
              id="image3"
              placeholder="choose file"
              onChange={(e) => {
                setImage3(e.target.files[0]);
              }}
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
