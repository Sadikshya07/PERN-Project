import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CoursesFinder from "../../api/CoursesFinder";
import { useEffect, useRef, useState } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import Popup from "reactjs-popup";

export default function Courses() {
  const gradeRef = useRef();
  const fileRef = useRef();
  const [courses, setCourses] = useState();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CoursesFinder.post(
        "/",
        {
          grade: gradeRef.current.value,
          file: fileRef.current.files[0],
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CoursesFinder.get("/");
        setCourses(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Admin | Courses</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <h1 className="text-orange text-2xl text-center font-bold m-10">
          Courses
        </h1>
        <Popup
          trigger={<button className="add-data-button">Add Data</button>}
          modal
        >
          {(close) => (
            <form
              onSubmit={handleSubmit}
              className="w-[44rem] mx-auto px-6 py-12 rounded-xl"
            >
              <label htmlFor="title" className="text-lg font-medium w-[10em]">
                Grade:
              </label>{" "}
              <br />
              <select
                className="border-2 border-black py-2 px-2 w-full rounded-lg mb-4"
                ref={gradeRef}
                required
              >
                <option disabled selected>
                  Choose Grade
                </option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
                <option value={"6"}>6</option>
                <option value={"7"}>7</option>
                <option value={"8"}>8</option>
                <option value={"9"}>9</option>
                <option value={"10"}>10</option>
                <option value={"11"}>11</option>
                <option value={"12"}>12</option>
              </select>
              <br />
              <label for="description" className="text-lg font-medium w-[10em]">
                File:
              </label>
              <br />
              <input
                type="file"
                className="border-2 w-full p-2 rounded-lg mb-4"
                required
                ref={fileRef}
              ></input>{" "}
              <br />
              <button
                type="submit"
                className="w-full bg-orange hover:bg-[#cb5c1c] text-white text-xl font-bold py-4 rounded-xl"
              >
                Submit
              </button>
            </form>
          )}
        </Popup>
        <table>
          <thead>
            <tr>
              <th>Grade</th>
              <th>File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses &&
              courses.map((course) => {
                return (
                  <tr key={course.id}>
                    <td>{course.grade}</td>
                    <td>{course.file}</td>
                    <td>Delete</td>
                    <td>Update</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </AdminLayout>
    </div>
  );
}
