import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NewsandEventsFinder from "../../api/NewsandEventsFinder";
import { useState } from "react";

export default function NewsAndEvents() {
  const [AuthorName, setAuthorName] = useState();
  const [Title, setTitle] = useState();
  const [Description,setDescription] = useState();
  const [Date,setDate] = useState();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await NewsandEventsFinder.post("/", {
        AuthorName,
        Title,
        Description,
        Date
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Head>
        <title>NewsAndEvents</title>
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
            <th>AuthorName</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
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
          onChange={(e) => setAuthorName(e.target.value)}
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
        <label for="Title">Title:</label> <br />
        <input
          type="text"
          id="Title"
          placeholder="Title"
          className="border-2"
          required
          onChange={(e) => setTitle(e.target.value)}
        ></input>{" "}
        <br />
        <label for="Date">Date:</label> <br />
        <input
          type="date"
          id="Date"
          placeholder="date"
          className="border-2"
          required
          onChange={(e) => setDate(e.target.value)}
        ></input>{" "}
        <br />
        <label for="image">Image:</label> <br />
        <input
          type="file"
          id="image"
          placeholder="Choose a file"
          className="border-2"
        ></input>{" "}
        <br />
        <button type="submit" className="border-2">
          Submit
        </button>
      </form>
    </div>
  );
}
