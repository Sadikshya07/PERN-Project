import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function StudentCorner() {
  return (
    <div>
      <Head>
        <title>Student Corner</title>
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
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Grade</th>
            <th>Image</th>
            <th>Article Title</th>
            <th>Article Content</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <form>
        <label for="name">Student Name:</label> <br />
        <input
          type="text"
          id="fname"
          placeholder="Name"
          className="border-2"
        ></input>
        <br />
        <label for="grade">Grade:</label> <br />
        <input
          type="text"
          id="grade"
          placeholder="grade"
          className="border-2"
        ></input>{" "}
        <br />
        <label for="rollno">Rollno:</label> <br />
        <input
          type="number"
          id="rollno"
          placeholder="Rollno"
          className="border-2"
        ></input>{" "}
        <br />
        <label for="title">Article Title</label> <br />
        <input
          type="text"
          id="title"
          placeholder="title"
          className="border-2"
        ></input><br/>
        <label for="Article">Article Content</label> <br />
        <input
          type="text"
          id="Article"
          placeholder="Content"
          className="border-2"
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
