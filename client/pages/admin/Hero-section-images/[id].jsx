import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import HeroSectionFinder from "../../api/HeroSectionFinder";
import { useRouter } from "next/router";

export default function HeroSectionImages() {
  const router = useRouter();
  const { id } = router.query;
  const [Page, setPage] = useState("Choose Page");
  const [image, setImage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HeroSectionFinder.get(`/${id}`);
        console.log(response.data.data);
        setPage(response.data.data.hero.page);
        setImage(response.data.data.hero.image);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await HeroSectionFinder.put(
      `/${id}`,
      {
        Page,
        image,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    router.push(`/admin/hero-section-images`);
  };
  return (
    <div>
      <Head>
        <title>Admin | Add Hero Section Images</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <h1 className="text-orange text-2xl text-center font-bold m-10">
          Update Hero Section Images
        </h1>
          <form
            onSubmit={handleSubmit}
            className="border-4 border-orange w-[40rem] mx-auto px-6 py-12 rounded-xl"
          >
            <label htmlFor="pagenames" className="text-lg font-medium">
              Page:
            </label>
            <select
              id="pagenames"
              value={Page}
              onChange={(e) => {
                setPage(e.target.value);
              }}
              className="border-2 border-black py-2 px-2 w-full rounded-lg mb-4"
            >
              <option disabled selected>
                Choose Page
              </option>
              <option value={"School in Media"}>School in Media</option>
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
            <label for="file" className="text-lg font-medium">
              File:
            </label>
            <input
              type="file"
              id="file"
              placeholder="choose file"
              className="border-2 w-full p-2 rounded-lg mb-4"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <br />
            <button
              type="submit"
              className="w-full bg-orange hover:bg-[#cb5c1c] text-white text-xl font-bold py-4 rounded-xl"
            >
              Submit
            </button>
          </form>
      </AdminLayout>
    </div>
  );
}
