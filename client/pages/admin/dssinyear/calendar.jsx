import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CalendarFinder from "../../api/CalendarFinder";
import { useState } from "react";

export default function Calendar() {
  const [Title,setTitle] = useState();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CalendarFinder.post("/", {
        Title,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Head>
        <title>Calendar</title>
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
            <th>Title:</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <form onChange={handleSubmit}>
      <h1>Calendar</h1>
      <label htmlFor="title">Title:</label> <br />
      <input
        type="text"
        id="title"
        placeholder="Title"
        className="border-2"
        required
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <br />
      <label for="file">File:</label> <br />
      <input
        type="file"
        id="file"
        placeholder="Choose file"
        className="border-2"
      ></input>{" "}
      <br />
      </form>
    </div>
  );
}
