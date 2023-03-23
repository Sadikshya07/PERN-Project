import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import SchoolActivitiesFinder from "../../api/SchoolActivitiesFinder";

export default function Metrics() {
  const [link, setLink] = useState();
  const [schoolActivities,setSchoolActivities] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SchoolActivitiesFinder.get("/");
        console.log(response.data.data);
        setSchoolActivities(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SchoolActivitiesFinder.post("/", {
        link,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await SchoolActivitiesFinder.delete(`/${id}`);
      setSchoolActivities(
        schoolActivities.filter((schoolActivities) => {
          return schoolActivities.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Head>
        <title>Admin | School Activities</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="main-container">
          <h1>School Activities</h1>
          <h3>
            Recommended to have at least 6 URLs to be displayed at a time.
          </h3>
          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             {schoolActivities &&
              schoolActivities.map((schoolActivities) => {
              return (
            <tr key={schoolActivities.id} >
            <td>{schoolActivities.link}</td>
            <td>
              <Link href="">
                <button
                onClick = {() => handleUpdate(schoolActivities.id)}
                className="border-2">Update</button>
              </Link>
            </td>
            <td>
              <button
              onClick = {() => handleDelete(schoolActivities.id)}
              className="border-2">Delete</button>
            </td>
            </tr>
              );
             })
           }
           </tbody>
          </table>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"> URL:</label>
            <input
              type="text"
              id="url"
              placeholder="URL"
              className="border-2"
              onChange={(e) => {
                setLink(e.target.value);
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
