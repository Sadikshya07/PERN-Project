import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import SchoolActivitiesFinder from "../../api/SchoolActivitiesFinder";
import { useRouter } from "next/router";

export default function SchoolActivities() {
  const [link, setLink] = useState();
  const [schoolActivities, setSchoolActivities] = useState();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SchoolActivitiesFinder.get("/");
        console.log(response.data.data);
        setSchoolActivities(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SchoolActivitiesFinder.post("/", {
        link,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await SchoolActivitiesFinder.delete(`/${id}`);
      setSchoolActivities(
        schoolActivities.filter((schoolActivities) => {
          return schoolActivities.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id) => {
    router.push(`/admin/home/School-activities/${id}`);
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
          {/* {/* <h3>
            Recommended to have at least 6 URLs to be displayed at a time.
          </h3> */}
          <table>
            <thead>
              <tr>
                <th>Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schoolActivities &&
                schoolActivities.map((schoolActivitie) => {
                  return (
                    <tr key={schoolActivitie.id}>
                      <td>Link={schoolActivitie.Link}</td>
                      <td>
                        <Link href="/admin/home/School-activities/`${id}`">
                          <button
                            onClick={() => handleUpdate(schoolActivitie.id)}
                            className="border-2"
                          >
                            Update
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(schoolActivitie.id)}
                          className="border-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"> URL:</label>
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
