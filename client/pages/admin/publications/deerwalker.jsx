import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DeerwalkerFinder from "../../api/DeerwalkerFinder";
import { useEffect, useState } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";

export default function Deerwalker() {
  const [name, setName] = useState();
  const [error, setError] = useState("");
  const [deerwalkerData, setDeerwalkerData] = useState();
  let i = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DeerwalkFinder.get("/");
        setDeerwalkerData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DeerwalkerFinder.post("/", {
        name,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Head>
        <title>Deerwalker</title>
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
              <th>File</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deerwalkerData &&
              deerwalkerData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{i++}</td>
                    <td>{item.name}</td>
                    <td>{item.file}</td>
                    <td>Delete</td>
                    <td>Update</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <form onChange={handleSubmit}>
          <h1>Deerwalker</h1>
          <label htmlFor="name"> Name:</label> <br />
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="border-2"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <label for="file">File:</label>
          <input
            type="file"
            id="file"
            placeholder="choose file"
            className="border-2"
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
