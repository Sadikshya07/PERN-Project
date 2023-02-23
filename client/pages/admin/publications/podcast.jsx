import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PodcastFinder from "../../api/PodcastFinder";
import { useState } from "react";

export default function Podcast() {
  const [PresenterName, setPresenterName] = useState();
  const [Rollno, setRollno] = useState();
  const [Grade, setGrade] = useState();
  const [PodcastDescription, setPodcastDescription] = useState();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await PodcastFinder.post("/", {
        PresenterName,
        Rollno,
        Grade,
        PodcastDescription
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Head>
        <title>Podcast</title>
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
            <th>Presenter Name</th>
            <th>Roll Number</th>
            <th>Podcast description</th>
            <th>Grade</th>
            <th>Image</th>
            <th>Video</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <form onChange={handleSubmit}>
        <label for="name">Presenter Name:</label> <br />
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="border-2"
          required
          onChange={(e) => setPresenterName(e.target.value)}
        ></input>
        <br />
        <label for="grade">Grade:</label> <br />
        <input
          type="text"
          id="grade"
          placeholder="grade"
          className="border-2"
          required
          onChange={(e) => setGrade(e.target.value)}
        ></input>{" "}
        <br />
        <label for="rollno">Rollno:</label> <br />
        <input
          type="number"
          id="rollno"
          placeholder="Rollno"
          className="border-2"
          required
          onChange={(e) => setRollno(e.target.value)}
        ></input>{" "}
        <br />
        <label for="video">Video link:</label> <br />
        <input
          type="url"
          id="video"
          placeholder="Place the link."
          className="border-2"
        ></input><br/>
        <label htmlFor="description">Podcast Description</label> <br />
        <input
          type="text"
          id="description"
          placeholder="description"
          className="border-2"
          required
          onChange={(e) => setPodcastDescription(e.target.value)}
        ></input>
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
