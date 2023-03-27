import Head from "next/head";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import MetricsFinder from "../../api/MetricsFinder";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Metrics() {
  const [formData, setFormData] = useState({
    Students: null,
    StudentsPerClass: null,
    Teachers: null,
    StudentTeacherRatio: null,
  });
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
      const response = await MetricsFinder.post("/", {
        formData,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      });
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

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Students: </label>
            <input
              type="text"
              id="students"
              placeholder=""
              onChange={(e) =>
                setFormData({ ...formData, Students: e.target.value })
              }
              className="border-2"
              required
            ></input>
            <br />
            <label htmlFor="name">Students Per Class: </label>
            <input
              type="text"
              id="perclass"
              placeholder=""
              className="border-2"
              onChange={(e) => {
                setFormData({ ...formData, StudentsPerClass: e.target.value });
              }}
              required
            ></input>
            <br />
            <label htmlFor="name">Teachers: </label>
            <input
              type="text"
              id="teachers"
              placeholder=""
              className="border-2"
              onChange={(e) => {
                setFormData({ ...formData, Teachers: e.target.value });
              }}
              required
            ></input>
            <br />
            <label htmlFor="name">Student-Teacher Ratio: </label>
            <input
              type="text"
              id="stratio"
              placeholder=""
              className="border-2"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  StudentTeacherRatio: e.target.value,
                });
              }}
              required
            ></input>
            <br />
            <button type="submit" className="border-2">
              Submit
            </button>
          </form>
        </div>
      </AdminLayout>
    </>
  );
}
