import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DeerwalkerFinder from "../../api/DeerwalkerFinder";
import { useEffect, useState } from "react";
import AdminLayout from "../../../components/Layouts/AdminLayout";
import Popup from "reactjs-popup";

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
          <h1 className="text-orange text-2xl text-center font-bold m-10">
            The Deerwalker
          </h1>
          <Popup
            trigger={<button className="add-data-button">Add Data</button>}
            modal
          >
            {(close) => (
              <form
                onChange={handleSubmit}
                className="border-4 border-orange w-[44rem] mx-auto px-6 py-12 rounded-xl"
              >
                <label htmlFor="title" className="text-lg font-medium w-[11em]">
                  Title:
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="title"
                  placeholder=""
                  className="border-2 w-full p-2 rounded-lg mb-4"
                  required
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <br />
                <label for="file" className="text-lg font-medium w-[11em]">
                  File:
                </label>
                <input
                  type="file"
                  id="file"
                  placeholder="choose file"
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
            )}
          </Popup>
          <table>
            <thead>
              <tr>
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
                      <td>{item.name}</td>
                      <td>{item.file}</td>
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
