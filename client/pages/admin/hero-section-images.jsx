import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import AdminLayout from "../../components/Layouts/AdminLayout";
import HeroSectionFinder from "../api/HeroSectionFinder";

export default function HeroSectionImages() {
  const [Page, setPage] = useState("Choose Page");
  const [image, setImage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await HeroSectionFinder.post(
        "/",
        {
          Page,
          image,
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
        <title>Add Hero Section Images</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <h1>Add Hero Section Images</h1>
        <div className="main-container">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="pagenames"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Page:
            </label>
            <select
              id="pagenames"
              value={Page}
              onChange={(e) => {
                setPage(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
            >
              <option disabled>Choose Page</option>
              <option value = {"School in Media"}>School in Media</option>
              <option value={"Management"}>Management</option>
              <option value={"Faculty"}>Faculty</option>
              <option value={"Why-DSS"}>Why DSS?</option>
              <option value={"DSS Courses"}>DSS Courses</option>
              <option value={"Weekend Camp Program"}>
                Weekend Camp Program
              </option>
              <option value={"Courses"}>Courses</option>
              <option value={"Alumni"}>Alumni</option>
              <option value={"News & Events"}>News & Events</option>
              <option value={"Newsletter"}>Newsletter</option>
              <option value={"Term Summary"}>Term Summary</option>
              <option value={"The Deerwalker"}>The Deerwalker</option>
              <option value={"Student Corner"}>Student Corner</option>
              <option value={"Analysis Report"}>Analysis Report</option>
              <option value={"Podcast"}>Podcast</option>
              <option value={"DSS Clubs"}>DSS Clubs</option>
              <option value={"Admission"}>Admission</option>
            </select>
            <br />
            <label for="file">File:</label>
            <input
              type="file"
              id="file"
              placeholder="choose file"
              className="border-2"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
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
