import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import FacultyFinder from "../../api/FacultyFinder";
import { useState } from "react";

export default function Faculty() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [department, setDepartment] = useState();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await FacultyFinder.post("/",{
        name,
        description,
        department
      });
    }
    catch(err){
      console.log(err);
    }
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
        <button className="border-2">Add</button>
        <br />
        <table>
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Description</th>
              <th>Department</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
        <form onSubmit={handleSubmit}>
          <label for="fname">Full name:</label> <br />
          <input
            type="text"
            id="fname"
            placeholder="Name"
            className="border-2"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label for="description">Description:</label> <br />
          <input
            type="text"
            id="description"
            placeholder="description"
            className="border-2"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <br />
          <label for="department">Department:</label> <br />
          <input
            type="text"
            id="department"
            placeholder="department"
            className="border-2"
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
          <br />
          <label for="image">Image:</label> <br />
          <input
            type="file"
            id="image"
            placeholder="Choose a file"
            className="border-2"
          />
          <br />
          <button type="submit" className="border-2">
            Submit
          </button>
        </form>
      </AdminLayout>
    </div>
  );
}
