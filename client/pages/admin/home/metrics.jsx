import Head from "next/head";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import MetricsFinder from "../../api/MetricsFinder";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Metrics() {
  const [formData, setFormData] = useState({
    Students: null,
    StudentsPerClass: null,
    Teachers: null,
    StudentTeacherRatio: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await MetricsFinder.post("/", {
        formData,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Head>
        <title>Add Metrics</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="main-container">
          <h1>Metrics</h1>
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
