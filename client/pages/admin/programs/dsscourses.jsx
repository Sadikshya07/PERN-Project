import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DssCoursesFinder from "../../api/DssCoursesFinder";
import { useState, useEffect, useRef } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import { useRouter } from "next/router";
import Popup from "reactjs-popup";

export default function DSSCourses() {
  const router = useRouter();
  const [name, setName] = useState();
  const desRef = useRef();
  const [DssCourses, setDssCourses] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DssCoursesFinder.get("/");
        setDssCourses(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DssCoursesFinder.post("/", {
        name,
        description: desRef.current.value,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await DssCoursesFinder.delete(`/${id}`);
      setDssCourses(
        DssCourses.filter((Courses) => {
          return Courses.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id) => {
    router.push(`/admin/programs/Dss-courses/${id}`);
  };
  return (
    <div>
      <Head>
        <title>Admin | DSS Courses</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <h1 className="text-orange text-2xl text-center font-bold m-10">
          DSS Courses
        </h1>
        <Popup
          trigger={<button className="add-data-button">Add Data</button>}
          modal
        >
          {(close) => (
            <form
              onSubmit={handleSubmit}
              className="w-[44rem] mx-auto px-6 py-12 rounded-xl"
            >
              <label htmlFor="title" className="text-lg font-medium w-[10em]">
                Title:
              </label>{" "}
              <br />
              <input
                type="text"
                id="title"
                placeholder=""
                className="border-2 w-full p-2 rounded-lg mb-4"
                required
                onChange={(e) => setName(e.target.value)}
              ></input>
              <br />
              <label for="" className="text-lg font-medium w-[10em]">
                Description:
              </label>
              <br />
              <textarea
                type="text"
                id="description"
                className="border-2 w-full p-2 rounded-lg mb-4 h-[8em]"
                required
                ref={desRef}
              ></textarea>
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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {DssCourses &&
              DssCourses.map((Courses) => {
                return (
                  <tr key={Courses.id}>
                    <td>{Courses.name}</td>
                    <td>{Courses.description}</td>
                    <td>
                      <Link href="/admin/programs/Dss-courses/`${id}`">
                        <button
                          onClick={() => handleUpdate(Courses.id)}
                          className="border-2"
                        >
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(Courses.id)}
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
      </AdminLayout>
    </div>
  );
}
