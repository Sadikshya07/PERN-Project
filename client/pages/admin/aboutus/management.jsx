import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ManagementFinder from "../../api/ManagementFinder";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import { useState, useEffect } from "react";
// import {useHistory} from "react-router-dom";

export default function Management() {
  // useState is used to change the variable when user types in the values (to check what is going on use console.log(name or description or position ))
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [position, setPosition] = useState();
  const [Management, setManagement] = useState();
  // error is used to display the error but it is not completed
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
    // <-- this function is used to submit the data to backend
    e.preventDefault(); //<-- here e.preventDefault is used so that the page doesnot reload since it is the default behaviour of form submission
    try {
      const response = await ManagementFinder.post(
        "/",
        {
          //<-- this is to submit the data. Since data is posted in post request here. The API can be found in the API folder.
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
      // setError(err.data.data);
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

  return (
    <div>
      <Head>
        <title>Admin | Management</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="container w-11/12 mx-auto my-3 py-3">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Position</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Management &&
                Management.map((person) => {
                  return (
                    <tr key={person.id}>
                      <td>name={person.name}</td>
                      <td>description={person.description}</td>
                      <td>position={person.position}</td>
                      <td>
                        <Link href="/admin/aboutus/update-management">
                          <button
                            // onClick = {() => handleUpdate(person.id)}
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
          {/* this is to just to call the function handleSubmit when the form is submitted  */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname" className="block">
              Full name:
            </label>
            <input
              type="name"
              id="fname"
              onChange={(e) => setName(e.target.value)}
              className="border-2"
            />
            <br />
            <label htmlFor="fname" className="block">
              Description:
            </label>
            <textarea
              type="text"
              id="desc"
              onChange={(e) => description(e.target.value)}
              className="border-2"
            />
            <br />
            <label htmlFor="fname" className="block">
              Full name:
            </label>
            <input
              type="name"
              id="fname"
              onChange={(e) => setPosition(e.target.value)}
              className="border-2"
            />
            <br />
            <label htmlFor="image">Image:</label> <br />
            <input
              type="file"
              id="image"
              placeholder="Choose a file"
              onChange={(e) => setImage(e.target.files[0])}
              className="border-2"
            />
            <br />
            <div className="m-3">
              <button type="submit" className="border-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </AdminLayout>
    </div>
  );
}
