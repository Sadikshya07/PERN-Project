import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TermSummaryFinder from "../../api/TermSummaryFinder";
import { useEffect, useState } from "react";

export default function TermSummary() {
  const [name, setName] = useState();
  const [error, setError] = useState("");
  const [termSummary, setTermSummary] = useState();
  let i = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TermSummaryFinder.get("/");
        setTermSummary(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await TermSummaryFinder.post("/", {
        name,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Head>
        <title>Term Summary</title>
        <meta name="description" content="Deerwalk Sifal School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          {termSummary.map((item) => {
            <tr key={item.id}>
              <td>{i++}</td>
              <td>{item.name}</td>
              <td>FIle here</td>
              <td>Update</td>
              <td>Delete</td>
            </tr>;
          })}
        </tbody>
      </table>
      <form onChange={handleSubmit}>
        <h1>Term Summary</h1>
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
    </div>
  );
}
