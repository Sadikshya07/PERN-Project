import Head from "next/head";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import MetricsFinder from "../../api/MetricsFinder";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Metrics() {
  const [formData, setFormData] = useState({
    Students: null,
    StudentsPerClass: null,
    Teachers: null,
    StudentTeacherRatio: null,
  });
  const studentRef = useRef();
  const studentsPerClassRef = useRef();
  const teachersRef = useRef();
  const studentTeacherRatioRef = useRef();
  const [metrics, setMetrics] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MetricsFinder.get("/all");
        console.log(response.data.data);
        setMetrics(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await MetricsFinder.post(
        "/",
        {
          Students: studentRef.current.value,
          StudentsPerClass: studentsPerClassRef.current.value,
          Teachers: teachersRef.current.value,
          StudentTeacherRatio: studentTeacherRatioRef.current.value,
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await MetricsFinder.delete(`/${id}`);
      setMetrics(
        metrics.filter((metrics) => {
          return metrics.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Add Metrics</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="main-container">
          <h1>Metrics</h1>
          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Students</th>
                <th>StudentsPerClass</th>
                <th>Teachers</th>
                <th>StudentTeacherRatio</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {metrics &&
                metrics.map((metric) => {
                  return (
                    <tr key={metric.id}>
                      <td>{metric.Students}</td>
                      <td>{metric.StudentsPerClass}</td>
                      <td>{metric.Teachers}</td>
                      <td>{metric.StudentTeacherRatio}</td>
                      <td>
                        <Link href="/admin/home/Metrics/`${id}`">
                          <button
                            onClick={() => handleUpdate(metric.id)}
                            className="border-2"
                          >
                            Update
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(metric.id)}
                          className="border-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <h1 className="text-orange text-2xl text-center font-bold m-10">
            Add Metrics
          </h1>
          <form
            onSubmit={handleSubmit}
            className="border-4 border-orange w-[44rem] mx-auto px-6 py-12 rounded-xl"
          >
            <label htmlFor="name" className="text-lg font-medium w-[11em]">
              Students:{" "}
            </label>
            <input
              type="text"
              id="students"
              placeholder=""
              ref={studentRef}
              className="border-2 w-full p-2 rounded-lg mb-4"
              required
            ></input>
            <br />
            <label htmlFor="name" className="text-lg font-medium w-[11em]">
              Students Per Class:{" "}
            </label>
            <input
              type="text"
              id="perclass"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              ref={studentsPerClassRef}
              required
            ></input>
            <br />
            <label htmlFor="name" className="text-lg font-medium w-[11em]">
              Teachers:{" "}
            </label>
            <input
              type="text"
              id="teachers"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              ref={teachersRef}
              required
            ></input>
            <br />
            <label htmlFor="name" className="text-lg font-medium w-[12em]">
              Student-Teacher Ratio:{" "}
            </label>
            <input
              type="text"
              id="stratio"
              placeholder=""
              className="border-2 w-full p-2 rounded-lg mb-4"
              ref={studentTeacherRatioRef}
              required
            ></input>
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
    </>
  );
}
