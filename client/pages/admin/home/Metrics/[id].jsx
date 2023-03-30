import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MetricsFinder from "../../../api/MetricsFinder";
import AdminLayout from "../../../../components/Layouts/AdminLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function UpdateMetrics() {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({
    Students: null,
    StudentsPerClass: null,
    Teachers: null,
    StudentTeacherRatio: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MetricsFinder.get(`/${id}`);
        console.log(response.data.data);
       setFormData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await MetricsFinder.put(`/${id}`, {
      formData,
    },
    {
      headers: { "Content-Type": "multipart/form-data" },
    });
    router.push("/admin/home/metrics");
  };

  return (
    <div>
      <Head>
        <title>Admin | Update-Metrics</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div>
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
    </div>
  );
}
