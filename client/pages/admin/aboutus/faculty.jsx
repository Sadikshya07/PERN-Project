import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Faculty() {
  return (
    <div>
      <Head>
        <title>Faculty</title>
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
            <th>Department</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <form>
        <label for="fname">Full name:</label> <br />
        <input
          type="text"
          id="fname"
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
        <label for="department">Department:</label> <br />
        <input
          type="text"
          id="department"
          placeholder="department"
          className="border-2"
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
