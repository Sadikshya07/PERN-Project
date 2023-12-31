import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import FacultyFinder from "../../api/FacultyFinder";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Popup from "reactjs-popup";

export default function Faculty() {
  const router = useRouter();

  const [name, setName] = useState();
  const [faculty, setFaculty] = useState();
  const [description, setDescription] = useState();
  const [department, setDepartment] = useState();
  const [AreaofExpertise, setAreaofExpertise] = useState();
  const [Experience, setExperience] = useState();
  const [image, setImage] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FacultyFinder.get("/");
        console.log(response.data.data);
        setFaculty(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await FacultyFinder.post(
        "/",
        {
          name,
          description,
          department,
          AreaofExpertise,
          image,
          Experience,
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await FacultyFinder.delete(`/${id}`);
      setFaculty(
        faculty.filter((person) => {
          return person.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    router.push("/admin/aboutus/Faculty/`${id}`");
  };

  return (
    <div>
      <Head>
        <title>Admin | Faculty</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <h1 className="text-orange text-2xl text-center font-bold m-10">
          Faculty
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
              <label for="fname" className="text-lg font-medium w-[11em]">
                Full name:
              </label>{" "}
              <br />
              <input
                type="text"
                id="fname"
                placeholder=""
                className="border-2 w-full p-2 rounded-lg mb-4"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label for="description" className="text-lg font-medium w-[11em]">
                Description:
              </label>{" "}
              <br />
              <textarea
                type="text"
                id="description"
                placeholder=""
                className="border-2 w-full p-2 rounded-lg mb-4 h-[8em]"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <br />
              <label for="department" className="text-lg font-medium w-[11em]">
                Department:
              </label>{" "}
              <br />
              <input
                type="text"
                id="Department"
                placeholder=""
                className="border-2 w-full p-2 rounded-lg mb-4"
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
              <br />
              <label for="department" className="text-lg font-medium w-[11em]">
                Area Of Expertise:
              </label>{" "}
              <br />
              <input
                type="text"
                id="areaOfExperties"
                placeholder=""
                className="border-2 w-full p-2 rounded-lg mb-4"
                onChange={(e) => setAreaofExpertise(e.target.value)}
                required
              />
              <br />
              <label
                for="areaOfExperties"
                className="text-lg font-medium w-[11em]"
              >
                Experience:
              </label>{" "}
              <br />
              <input
                type="text"
                id="experience"
                placeholder=""
                className="border-2 w-full p-2 rounded-lg mb-4"
                onChange={(e) => setExperience(e.target.value)}
                required
              />
              <br />
              <label for="image" className="text-lg font-medium w-[11em]">
                Image:
              </label>{" "}
              <br />
              <input
                type="file"
                id="image"
                placeholder="Choose a file"
                className="border-2 w-full p-2 rounded-lg mb-4"
                onChange={(e) => setImage(e.target.files[0])}
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
              <th className="table-header">Name</th>
              <th className="table-header">Description</th>
              <th className="table-header">Department</th>
              <th className="table-header">AreaofExpertise</th>
              <th className="table-header">Experience</th>
              <th className="table-header">Image</th>
              <th className="table-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {faculty &&
              faculty.map((person) => {
                return (
                  <tr key={person.id} className="border-b-2">
                    <td className="table-data">{person.name}</td>
                    <td className="table-data">{person.description}</td>
                    <td className="table-data">{person.department}</td>
                    <td className="table-data">{person.AreaofExpertise}</td>
                    <td className="table-data">{person.Experience}</td>
                    <td className="table-data">{person.image}</td>
                    <td className="actions">
                      <Link href="/admin/aboutus/Faculty/`${id}`">
                        <button
                          onClick={() => handleUpdate(person.id)}
                          className="update"
                        >
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(person.id)}
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
