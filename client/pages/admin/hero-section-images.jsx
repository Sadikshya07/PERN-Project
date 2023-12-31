import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import AdminLayout from "../../components/Layouts/AdminLayout";
import HeroSectionFinder from "../api/HeroSectionFinder";
import { useRouter } from "next/router";

export default function HeroSectionImages() {
  const router = useRouter();
  const [Page, setPage] = useState("Choose Page");
  const [image, setImage] = useState();
  const [herosection, setHeroSection] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HeroSectionFinder.get("/");
        ``;
        setHeroSection(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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

  const handleDelete = async (id) => {
    try {
      const response = await HeroSectionFinder.delete(`/${id}`);
      setHeroSection(
        herosection.filter((hero) => {
          return hero.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    router.push(`/admin/Hero-section-images/${id}`);
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
          Hero Section Images
        </h1>
        <Popup
          trigger={<button className="add-data-button">Add Data</button>}
          modal
        >
          {(ckose) => (
            <form
              onSubmit={handleSubmit}
              className="w-[40rem] mx-auto px-6 py-12 rounded-xl"
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
          )}
        </Popup>
        <table className="table-style">
          <thead>
            <tr>
              <th className="table-header">Page</th>
              <th className="table-header">Image</th>
              <th className="table-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {herosection &&
              herosection.map((hero) => {
                return (
                  <tr key={hero.id}>
                    <td>page={hero.Page}</td>
                    <td>image={hero.Image}</td>
                    <td>
                      <Link href="/admin/Hero-section-images/`${id}`">
                        <button
                          onClick={() => handleUpdate(hero.id)}
                          className="update"
                        >
                          Update
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(hero.id)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </AdminLayout>
    </div>
  );
}
