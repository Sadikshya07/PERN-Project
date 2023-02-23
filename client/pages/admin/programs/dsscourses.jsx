import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DssCoursesFinder from "../../api/DssCoursesFinder";
import { useState } from "react";

export default function DSSCourses() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await DssCoursesFinder.post("/",{
        name,
        description
      });
    }
    catch(err){
      console.log(err);
    }}
  return (
    <div>
      <Head>
        <title>DSS Courses</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className="border-2">Add</button>
      <br />
      <table>
        <thead>
          <tr>
            <th>SN</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <form onChange={handleSubmit}>
        <label htmlFor="name">Name:</label> <br />
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="border-2"
          required
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <label for="description">Description:</label> <br />
        <input
          type="text"
          id="description"
          placeholder="description"
          className="border-2"
          required
          onChange={(e) => setDescription(e.target.value)}
        ></input>{" "}
        <br />
        <button type="submit" className="border-2">
          Submit
        </button>
      </form>
    </div>
  );
}
