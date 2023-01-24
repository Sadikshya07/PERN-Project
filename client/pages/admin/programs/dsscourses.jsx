import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function DSSCourses() {
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
      <form>
        <label htmlFor="name">Name:</label> <br />
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="border-2"
        ></input>
        <br />
        <label for="description">Description:</label> <br />
        <input
          type="text"
          id="description"
          placeholder="description"
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
