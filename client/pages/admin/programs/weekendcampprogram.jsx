import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import WeekendCampFinder from "../../api/WeekendCampFinder";
import { useState,useEffect } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";

export default function WeekendCampProgram() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [WeekendCampProgram, setWeekendCampProgram] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await WeekendCampFinder.get("/");
        console.log(response.data.data);
        setWeekendCampProgram(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try{
      const response = await WeekendCampFinder.delete(`/${id}`);
      setWeekendCampProgram(
        WeekendCampProgram.filter((item) => {
          return item.id !== id;
        })
      );
    } catch (err){
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await WeekendCampFinder.post("/",{
        name,
        description
      });
    }
    catch(err){
      console.log(err);
    }}

  
  return (
    <div>
      <Head>
        <title>Admin | Weekend Camp Program</title>
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
              <th>SN</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
             {WeekendCampProgram &&
              WeekendCampProgram.map((item) => {
              return (
            <tr key={item.id} >
            <td>name={item.name}</td>
            <td>description={item.description}</td>
            <td>
              <Link href="">
                <button
                onClick = {() => handleUpdate(item.id)}
                className="border-2">Update</button>
              </Link>
            </td>
            <td>
              <button
              onClick = {() => handleDelete(item.id)}
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
          ></input>
          <br />
          <button type="submit" className="border-2">
            Submit
          </button>
        </form>
      </AdminLayout>
    </div>
  );
}
