import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import StudentCornerFinder from "../../api/StudentCornerFinder";
import { useState } from "react";

export default function StudentCorner() {
    const [StudentName, setStudentName] = useState();
    const [Rollno, setRollno] = useState();
    const [Grade, setGrade] = useState();
    const [ArticleTitle, setArticleTitle] = useState();
    const [ArticleContent, setArticleContent] = useState();
    const [error, setError] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await StudentCornerFinder.post("/", {
          StudentName,
          Rollno,
          Grade,
          ArticleTitle,
          ArticleContent
        });
      } catch (err) {
        console.log(err);
      }
    };
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
            <th>Article Title</th>
            <th>Article Content</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <form onChange={handleSubmit}>
        <label for="name">Student Name:</label> <br />
        <input
          type="text"
          id="fname"
          placeholder="Name"
          className="border-2"
          required
          onChange={(e) => setStudentName(e.target.value)}
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
        <label for="title">Article Title</label> <br />
        <input
          type="text"
          id="title"
          placeholder="title"
          className="border-2"
          required
          onChange={(e) => setArticleTitle(e.target.value)}
        ></input><br/>
        <label for="Article">Article Content</label> <br />
        <input
          type="text"
          id="Article"
          placeholder="Content"
          className="border-2"
          required
          onChange={(e) => setArticleContent(e.target.value)}
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
