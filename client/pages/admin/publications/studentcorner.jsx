import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import StudentCornerFinder from "../../api/StudentCornerFinder";
import { useEffect, useState } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";

export default function StudentCorner() {
  const [StudentName, setStudentName] = useState();
  const [Rollno, setRollno] = useState();
  const [Grade, setGrade] = useState();
  const [ArticleTitle, setArticleTitle] = useState();
  const [ArticleContent, setArticleContent] = useState();
  const [error, setError] = useState("");
  const [studnentCorner, setStudentCorner] = useState();
  let i = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StudentCornerFinder.get("/");
        setStudentCorner(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await StudentCornerFinder.post("/", {
        StudentName,
        Rollno,
        Grade,
        ArticleTitle,
        ArticleContent,
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
      <AdminLayout>
        <h1 className="text-orange text-2xl text-center font-bold m-10">
          Add Student Corner
        </h1>
        <div className="main-container">
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
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {studnentCorner &&
                studnentCorner.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{i++}</td>
                      <td>{item.studentname}</td>
                      <td>{item.studentname}</td>
                      <td>{item.grade}</td>
                      <td>{item.articletitle}</td>
                      <td>{item.articlecontent}</td>
                      <td>Imaga here</td>
                      <td>Delete</td>
                      <td>Update</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <form
            onChange={handleSubmit}
            className="border-4 border-orange w-[44rem] mx-auto px-6 py-12 rounded-xl"
          >
            <label for="name" className="text-lg font-medium w-[11em]">
              Student Name:
            </label>
            <input
              type="text"
              id="fname"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
              onChange={(e) => setStudentName(e.target.value)}
            />
            <br />
            <label for="grade" className="text-lg font-medium w-[11em]">
              Grade:
            </label>
            <input
              type="text"
              id="grade"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
              onChange={(e) => setGrade(e.target.value)}
            ></input>{" "}
            <br />
            <label for="rollno" className="text-lg font-medium w-[11em]">
              Roll Number:
            </label>
            <input
              type="number"
              id="rollno"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
              onChange={(e) => setRollno(e.target.value)}
            ></input>{" "}
            <br />
            <label for="title" className="text-lg font-medium w-[11em]">
              Article Title
            </label>
            <input
              type="text"
              id="title"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
              onChange={(e) => setArticleTitle(e.target.value)}
            ></input>
            <br />
            <label for="Article" className="text-lg font-medium w-[11em]">
              Article Content
            </label>
            <textarea
              type="text"
              id="Article"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4 h-[8em]"
              required
              onChange={(e) => setArticleContent(e.target.value)}
            ></textarea>
            <br />
            <label for="image" className="text-lg font-medium w-[11em]">
              Image:
            </label>
            <input
              type="file"
              id="image"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
            ></input>{" "}
            <br />
            <button
              type="submit"
              className="w-full bg-orange hover:bg-[#cb5c1c] text-white text-xl font-bold py-4 rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </AdminLayout>
    </div>
  );
}
