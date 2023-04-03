import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ManagementFinder from "../../api/ManagementFinder";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Popup from "reactjs-popup";

export default function Management() {
  const router = useRouter();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [position, setPosition] = useState();
  const [Management, setManagement] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ManagementFinder.get("/");
        console.log(response.data.data);
        setManagement(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ManagementFinder.post(
        "/",
        {
          name,
          description,
          position,
          image,
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      Management(response.data.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await ManagementFinder.delete(`/${id}`);
      setManagement(
        Management.filter((person) => {
          return person.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    router.push(`/admin/aboutus/Management/${id}`);
  };

  return (
    <div>
      <Head>
        <title>Admin | Management</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <h1 className="text-orange text-2xl text-center font-bold m-10">
          Management
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
              <label htmlFor="fname" className="text-lg font-medium w-[11em]">
                Full name:
              </label>
              <input
                type="text"
                id="fname"
                onChange={(e) => setName(e.target.value)}
                className="border-2 w-full p-2 rounded-lg mb-4"
              />
              <br />
              <label
                htmlFor="position"
                className="text-lg font-medium w-[11em]"
              >
                Position:
              </label>
              <input
                type="text"
                id="position"
                placeholder=""
                className="border-2 w-full p-2 rounded-lg mb-4"
                onChange={(e) => setPosition(e.target.value)}
                required
              />
              <br />
              <label htmlFor="desc" className="text-lg font-medium w-[11em]">
                Description:
              </label>
              <textarea
                type="text"
                id="desc"
                onChange={(e) => setDescription(e.target.value)}
                className="border-2 w-full p-2 rounded-lg mb-4 h-[8em]"
              />
              <br />
              <label htmlFor="image" className="text-lg font-medium w-[11em]">
                Image:
              </label>
              <input
                type="file"
                id="image"
                placeholder="Choose a file"
                onChange={(e) => setImage(e.target.files[0])}
                className="border-2 w-full p-2 rounded-lg mb-4"
                required
                // Since the name or description or position needs to be sent to backend we can change their values using onChnage handler of form. setName is used from useState .
                //  e.target.value is taking the value from the input box. And the same is done for all the following data that needs to be sent
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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Position</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Management &&
              Management.map((person) => {
                return (
                  <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.description}</td>
                    <td>{person.position}</td>
                    <td>{person.image}</td>
                    <td>
                      <Link href="/admin/aboutus/Management/`${id}`">
                        <button
                          onClick={() => handleUpdate(person.id)}
                          className="border-2"
                        >
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(person.id)}
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
