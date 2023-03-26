import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import SchoolActivitiesFinder from "../../api/SchoolActivitiesFinder";

export default function Metrics() {
  const [link, setLink] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SchoolActivitiesFinder.post("/", {
        link,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Head>
        <title>Admin | School Activities</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="main-container">
          <h1 className="text-orange text-2xl text-center font-bold m-10">Add School Activities</h1>
          {/* <h3>
            Recommended to have at least 6 URLs to be displayed at a time.
          </h3> */}
          <form onSubmit={handleSubmit} className="border-4 border-orange w-[44rem] mx-auto px-6 py-12 rounded-xl">
            <label htmlFor="name" className="text-lg font-medium w-[11em]">Link to Video <span className="italic font-normal">(please paste in the link from the "embed" option from the YouTube video.)</span>:</label>
            <input
              type="text"
              id="url"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              onChange={(e) => {
                setLink(e.target.value);
              }}
              required
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
