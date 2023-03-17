import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DssCoursesFinder from "../../api/DssCoursesFinder";
import { useState,useEffect } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import {useRouter} from "next/router";

export default function DSSCourses() {
  const router = useRouter();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [DssCourses, setDssCourses] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DssCoursesFinder.get("/");
        console.log(response.data.data);
        setDssCourses(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await DssCoursesFinder.post("/",{
        name,
        description
      });
    }
    catch(err){
      console.log(err);
    }}
    
    const handleDelete = async (id) => {
      try{
        const response = await DssCoursesFinder.delete(`/${id}`);
        setDssCourses(
          DssCourses.filter((Courses) => {
            return Courses.id !== id;
          })
        );
      } catch (err){
        console.log(err);
      }
    }


    const handleUpdate = async (id) => {
      router.push("")
    }

  return (
    <div>
      <Head>
        <title>Admin | DSS Courses</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <button className="border-2">Add</button>
        <br />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
             {DssCourses &&
              DssCourses.map((Courses) => {
              return (
            <tr key={Courses.id} >
            <td>name={Courses.name}</td>
            <td>description={Courses.description}</td>
            <td>
              <Link href="">
                <button
                onClick = {() => handleUpdate(Courses.id)}
                className="border-2">Update</button>
              </Link>
            </td>
            <td>
              <button
              onClick = {() => handleDelete(Courses.id)}
              className="border-2">Delete</button>
            </td>
            </tr>
              );
             })
           }
           </tbody>
        </table>
        <form onChange={handleSubmit}>
          <label htmlFor="name">Name:</label> <br />
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="border-2"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <label for="description">Description:</label> <br />
          <input
            type="text"
            id="description"
            placeholder="description"
            className="border-2"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></input>{" "}
          <br />
          <button type="submit" className="border-2">
            Submit
          </button>
        </form>
      </AdminLayout>
    </div>
  );
}
